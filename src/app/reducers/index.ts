import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loginReducer, loginInterface } from './login.reducer';

export interface State {
  login: loginInterface
}

export const reducers: ActionReducerMap<State> = {
  login: loginReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];