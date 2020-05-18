import {Component, OnInit} from '@angular/core';
import {Team} from '../../../../../../core/models/entities/team';
import {TeamService} from '../../../../../../core/services/team.service';
import {UserService} from '../../../../../../core/services/user.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.css']
})
export class TeamAddComponent implements OnInit {
  team: Team = new Team();

  constructor(private teamService: TeamService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }


  createTeam(team) {
    this.teamService.store(team).subscribe(perf => {
      this.router.navigateByUrl('/teams');
    }, err => {
      console.log(err);
    });
  }
}
