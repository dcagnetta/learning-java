import { Action, createReducer, on } from '@ngrx/store';
import { StartSession } from './session.actions';

export interface SessionState {
  id?: string,
  name?: string,
  shortId?: string,
  isCreated?: boolean,
  isJoined?: boolean
}

export const initialState: SessionState = {
  id: null,
  name: null,
  shortId: null,
  isCreated: false,
  isJoined: false
};


export const reducer = createReducer(
  initialState,

  on( StartSession, ( state, {id, name, shortId} ) => ({...state, id, name, shortId,isCreated: true }) ),

);


export function sessionReducer( state: SessionState | undefined, action: Action ) {
  return reducer( state, action );
}
