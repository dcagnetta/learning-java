import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@ng-websocket-app/shared/environments';
import { debug } from './debug';

export interface State {
  session: {
    name: string,
    isCreated?: boolean,
    isJoined?: boolean
  }
}

export const reducers: ActionReducerMap<State> = {};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];
