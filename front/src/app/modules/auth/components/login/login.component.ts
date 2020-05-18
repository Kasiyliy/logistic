import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginApiRequest} from '../../../../core/models/requests/login-api-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  login() {
    const loginApiRequest = this.loginForm.getRawValue() as LoginApiRequest;
    this.authService.login(loginApiRequest).subscribe(perf => {
      this.authService.authorize(perf);
    }, err => {
      console.log(err);
    });
  }
}
