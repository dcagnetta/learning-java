import { EstimationItem } from '@ng-websocket-app/estimation/domain';
import { Action, createReducer, on } from '@ngrx/store';
import { AddNewEstimationItem } from './estimation.actions';
import { SessionState } from '../session/session.reducer';

export interface EstimationState {
  items: EstimationItem[]
}

export const initialState: EstimationState = {
  items: []
};


export const reducer = createReducer(
  initialState,

  on( AddNewEstimationItem, ( state, { payload } ) => ({
    ...state,
    items: state.items.concat( payload )
  }) )
);

export function estimationReducer( state: EstimationState | undefined, action: Action ) {
  return reducer( state, action );
}
