import { createReducer, on } from '@ngrx/store'
import { loginSuccess, loginError, logout } from '../actions/login.actions';

export interface LoginInterface {
  userEmail: string;
  error: string;
  isLogged: boolean;
}

export const loginReducerInitialState: LoginInterface = {
  userEmail: '',
  error: '',
  isLogged: false
};

const loginReducerHandler = createReducer(
  loginReducerInitialState,
  on(loginSuccess, (state, { email }) => ({ ...state, userEmail: email, isLogged: true })),
  on(loginError, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => ({ ...state, userEmail: '' }))
);

export function loginReducer(state, action) {
  return loginReducerHandler(state, action);
}
