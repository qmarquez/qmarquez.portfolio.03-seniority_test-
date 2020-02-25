import { createReducer, on } from '@ngrx/store'
import { loginSuccess, loginError, logout } from '../actions/login.actions';

export interface loginInterface {
  userEmail: string,
  error: string,
  isLoggedIn: boolean
}

const initialState: loginInterface = {
  userEmail: '',
  error: '',
  isLoggedIn: false
}

const _loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { email }) => ({ ...state, userEmail: email })),
  on(loginError, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => ({ ...state, userEmail: '' }))
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}