import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginInterface } from '../../reducers/login.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private readonly store: Store<{ login: loginInterface }>,
    private readonly fBuilder: FormBuilder
  ) {
    this.loginForm = fBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]]
    });
  }

}
