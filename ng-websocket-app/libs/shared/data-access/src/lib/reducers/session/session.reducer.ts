import { Action, createReducer, on } from '@ngrx/store';
import { StartSession } from './session.actions';

export interface SessionState {
  name?: string,
  isCreated?: boolean,
  isJoined?: boolean
}

export const initialState: SessionState = {
  name: null,
  isCreated: false,
  isJoined: false
};


export const reducer = createReducer(
  initialState,

  on( StartSession, ( state, {name} ) => ({...state, name, isCreated: true }) ),

);


export function sessionReducer( state: SessionState | undefined, action: Action ) {
  return reducer( state, action );
}
