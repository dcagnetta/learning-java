import { Action, createReducer, on } from '@ngrx/store';
import { StartSession } from './session.actions';

export interface SessionState {
  id?: any,
  name?: string,
  isCreated?: boolean,
  isJoined?: boolean
}

export const initialState: SessionState = {
  id: null,
  name: null,
  isCreated: false,
  isJoined: false
};


export const reducer = createReducer(
  initialState,

  on( StartSession, ( state, {id, name} ) => ({...state, id, name, isCreated: true }) ),

);


export function sessionReducer( state: SessionState | undefined, action: Action ) {
  return reducer( state, action );
}
