import { createReducer, on } from '@ngrx/store'
import { loginSuccess, loginError, logout } from '../actions/login.actions';

export interface loginInterface {
  userEmail: string,
  error: string,
  isLogged: boolean
}

const initialState: loginInterface = {
  userEmail: '',
  error: '',
  isLogged: false
}

const _loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { email }) => ({ ...state, userEmail: email, isLogged: true })),
  on(loginError, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => ({ ...state, userEmail: '' }))
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}