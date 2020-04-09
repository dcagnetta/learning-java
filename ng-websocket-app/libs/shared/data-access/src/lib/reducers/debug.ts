import { ActionReducer } from '@ngrx/store';

/*
* logs the NgRx Store state and the dispatched action, every time actions are about to be reduced.
* */
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
