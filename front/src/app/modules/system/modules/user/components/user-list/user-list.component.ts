import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../../../../../core/services/role.service";
import {Role} from "../../../../../../core/models/entities/role";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../../core/services/user.service";
import {debounceTime, distinctUntilChanged, filter, mergeMap} from "rxjs/operators";
import {User} from "../../../../../../core/models/entities/user";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


    roles: Role[] = [];
    searchForm: FormGroup = null;
    addUserForm: FormGroup = null;
    isFormValid = false;
    users: User[] = [];

    constructor(private roleService: RoleService,
                private userService: UserService,
                private toastrService: ToastrService,
                private builder: FormBuilder) {
    }

    ngOnInit(): void {

        this.searchForm = this.builder.group({
            roleId: [null, [Validators.required]],
        });

        this.addUserForm = this.builder.group({
            role_id: [null, [Validators.required]],
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]],
            phone: [null, [Validators.required]],
        });

        this.roleService.getRoles().subscribe(perf => {
            this.roles = perf;
        });
        this.addUserForm.get('email').valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                filter((perf) => {
                    if (perf && new RegExp(('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,10})+$')).test(perf)) {
                        return true;
                    }
                    this.isFormValid = false;
                    return this.isFormValid;
                }),
                mergeMap((perf) => {
                    return this.userService.getUserByEmail(perf);
                })
            )
            .subscribe(perf => {
                if (!perf) {
                    this.isFormValid = true;
                } else {
                    this.toastrService.warning('Пользователь с таким email уже существует!');
                }
            });

        this.searchForm.valueChanges.pipe(
            mergeMap(perf => {
                return this.userService.getUserByRoleId(perf.roleId);
            })
        ).subscribe(perf => {
            this.users = perf;
        });

    }

    public createUser() {
        const user = this.addUserForm.getRawValue() as User;
        user.role_id = +user.role_id;
        this.userService.store(user).subscribe(perf => {
            this.toastrService.success('Пользователь успешно добавлен!');
            this.addUserForm.reset();
        }, err => {
            this.toastrService.error('Произошла ошибка!');
        });
    }

}
