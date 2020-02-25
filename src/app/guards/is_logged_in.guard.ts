import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { loginInterface } from '../reducers/login.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  isLogin$: Observable<loginInterface>;

  constructor(
    store: Store<{ login: loginInterface }>,
    private router: Router
  ) {
    this.isLogin$ = store.pipe(select('login'));
  }

  canActivate() {
    return this.isLogin$.pipe(
      map(({ isLoggedIn }) => isLoggedIn || this.router.parseUrl('/login'))
    );
  }
}