import {Component, OnInit} from '@angular/core';
import {Team} from '../../../../../../core/models/entities/team'
import {ActivatedRoute, Router} from '@angular/router';
import {TeamService} from '../../../../../../core/services/team.service';
import {UserService} from '../../../../../../core/services/user.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  teamId: number;
  team: Team;

  constructor(private route: ActivatedRoute,
              private teamService: TeamService,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap((perf) => {
        this.teamId = perf.id;
        return this.teamService.getById(this.teamId);
      }),
    ).subscribe(perf => {
      this.team = perf;
    });
  }


  editTeam(team) {
    this.teamService.update(this.teamId, team).subscribe(perf => {
      this.router.navigateByUrl('/teams');
    }, err => {
      console.log(err);
    });
  }

}
