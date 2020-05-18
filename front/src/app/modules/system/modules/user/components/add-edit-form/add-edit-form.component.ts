import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Role} from "../../../../../../core/models/entities/role";
import {UserService} from "../../../../../../core/services/user.service";
import {RoleService} from "../../../../../../core/services/role.service";
import {Router} from "@angular/router";
import {MustMatch} from "../../../../../../core/validators/must-match";
import {User} from "../../../../../../core/models/entities/user";
import {Course} from "../../../../../../core/models/entities/course";

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {

  form: FormGroup;
  roles: Role[] = [];

  @Input()
  user: User;

  @Output()
  validUser = new EventEmitter<User>();

  constructor(private builder: FormBuilder,
              private userService: UserService,
              private roleService: RoleService,
              private router: Router) {
  }

  ngOnInit() {
    this.roleService.getRoles().subscribe(perf => {
      this.roles = perf;
    }, err => {
      console.log(err);
    });

    if (this.user.id) {
      this.form = this.builder.group({
        name: [this.user.name, [Validators.required]],
        email: [this.user.email, [Validators.required, Validators.email]],
        password: [this.user.password, []],
        password_confirm: ['', []],
        role_id: [this.user.role_id, [Validators.required]],
      });

    } else {
      this.form = this.builder.group({
          name: [this.user.name, [Validators.required]],
          email: [this.user.email, [Validators.required, Validators.email]],
          password: [this.user.password, [Validators.required]],
          password_confirm: ['', [Validators.required]],
          role_id: [this.user.role_id, [Validators.required]],
        },
        {
          validator: MustMatch('password', 'password_confirm')
        });
    }

  }

  onVaild() {
    this.user = this.form.getRawValue() as User;
    this.form.reset();
    this.validUser.emit(this.user);
  }
}
