import { ActionReducer } from '@ngrx/store';

export function debugMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const { type, ...data } = action;

    const typeCSS = 'background: #000; color: #fff;';
    const stateCSS = 'color: #4cc44a;';
    const dataCSS = 'color: #ddc933';

    const nextState = reducer(state, action);

    console.log(
      `%c-> %s%c | %c[DATA]%c:%O | %c[PREV_STATE]%c: %O | %c[NEXT_STATE]%c: %O`,
      typeCSS, type, '',
      dataCSS, '', data,
      stateCSS, '', state,
      stateCSS, '', nextState,
    );

    return nextState;
  };
}
