import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../../../core/models/entities/user';
import {Team} from '../../../../../../core/models/entities/team';
import {TeamService} from '../../../../../../core/services/team.service';
import {UserService} from '../../../../../../core/services/user.service';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  form: FormGroup;
  coaches: User[] = [];
  @Input()
  team: Team;

  @Output()
  validTeam = new EventEmitter<Team>();

  constructor(private builder: FormBuilder,
              private teamService: TeamService,
              private userService: UserService,
  ) {

  }

  ngOnInit() {
    this.userService.getCoaches().subscribe(perf => {
      this.coaches = perf;
    }, err => {
      console.log(err);
    });
    this.form = this.builder.group({
      name: [this.team.name, [Validators.required]],
      coach_id: [this.team.coach_id, [Validators.required]],
    });

  }

  onValid() {
    this.team = this.form.getRawValue() as Team;
    this.form.reset();
    this.validTeam.emit(this.team);
  }

}
