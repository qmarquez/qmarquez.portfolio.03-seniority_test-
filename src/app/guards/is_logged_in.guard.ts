import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { LoginInterface } from '../reducers/login.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  isLogin$: Observable<LoginInterface>;

  constructor(
    store: Store<{ login: LoginInterface }>,
    private router: Router
  ) {
    this.isLogin$ = store.pipe(select('login'));
  }

  canActivate() {
    return this.isLogin$.pipe(
      map(({ isLogged }) => isLogged || this.router.parseUrl('/login'))
    );
  }
}