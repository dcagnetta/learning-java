import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { environment } from '@ng-websocket-app/shared/environments';
import { debug } from './debug';
import { sessionReducer, SessionState } from './session/session.reducer';

export interface State {
  session: SessionState
}


export const reducers: ActionReducerMap<State> = {
  session: sessionReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];

/*
* State selectors
* */
export const selectSessionState = createFeatureSelector<State, SessionState>(
  'session'
);
