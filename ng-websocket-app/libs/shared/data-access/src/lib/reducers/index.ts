import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { environment } from '@ng-websocket-app/shared/environments';
import { debug } from './debug';
import { sessionReducer, SessionState } from './session/session.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  session: SessionState
}


export const reducers: ActionReducerMap<State> = {
  session: sessionReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

/*
* Local Storage sync
* */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['session'], rehydrate: true})(reducer);
}

/*
* State selectors
* */
export const selectSessionState = createFeatureSelector<State, SessionState>(
  'session'
);
