import { ActionReducer } from '@ngrx/store';

export function localstorageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);

    window.localStorage.setItem('dummy_state', JSON.stringify(nextState));

    return nextState;
  };
}
