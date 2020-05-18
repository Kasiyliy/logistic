import {Component, OnInit} from '@angular/core';
import {PageWrapper} from '../../../../../../core/models/wrappers/page-wrapper';
import {Team} from '../../../../../../core/models/entities/team';
import {TeamService} from '../../../../../../core/services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamPageWrapper: PageWrapper<Team>;
  currentPage = null;

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.getList();
  }

  public getList() {
    this.teamService.getPaginatedUTeams(this.currentPage).subscribe(perf => {
      this.teamPageWrapper = perf;
    }, err => {
      console.log(err);
    });
  }

  createRange(page) {
    const numbers = [];
    for (let i = 1; i <= page; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  changePage(page) {
    this.currentPage = page;
    this.getList();
  }

}
