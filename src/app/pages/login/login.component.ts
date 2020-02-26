import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginInterface } from '../../reducers/login.reducer';
import { AuthService } from '../../services/auth.service';
import { loginSuccess, loginError } from '../../actions/login.actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  error: Observable<string>;

  constructor(
    private readonly store: Store<{ login: loginInterface }>,
    private readonly authService: AuthService,
    private readonly router: Router,
    fBuilder: FormBuilder,
  ) {
    this.loginForm = fBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    this.error = store.pipe(select('login')).pipe(map(({ error }) => error))
  }

  doLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.doLogin(email, password)
        .subscribe({
          next: () => {
            this.store.dispatch(loginSuccess({ email }));
            this.router.navigateByUrl('/mails');
          },
          error: ({ status }) => {
            if (status === 401) {
              this.store.dispatch(loginError({ error: 'User or password wrong' }));
            }
          }
        });
    }
  }

}
