import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { loginReducer, LoginInterface, loginReducerInitialState } from './login.reducer';

import { debugMetaReducer } from './debug.metaReducer';
import { localstorageMetaReducer } from './localstorage.metaReducer';

export interface State {
  login: LoginInterface;
}

const dummyState = window.localStorage.getItem('dummy_state');
const savedState = dummyState && JSON.parse(dummyState);

export const initialState = savedState || {
  login: loginReducerInitialState
};

export const reducers: ActionReducerMap<State> = {
  login: loginReducer
};

const baseMetaReducers = [
  localstorageMetaReducer
];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debugMetaReducer, ...baseMetaReducers] : [...baseMetaReducers];
