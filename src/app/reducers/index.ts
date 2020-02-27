import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loginReducer, LoginInterface } from './login.reducer';

export interface State {
  login: LoginInterface;
}

export const reducers: ActionReducerMap<State> = {
  login: loginReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];