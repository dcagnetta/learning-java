import { SessionState } from './session.reducer';
import { selectSessionState } from '../index';
import { createSelector } from '@ngrx/store';

class SettingsState {
}

/*
* Selects the state slice
* */
export const selectSession = createSelector(
  selectSessionState,
  (state: SessionState) => state
);


/*
* Property selectors
* */
export const selectSessionName = createSelector(
  selectSession,
  session => session.name
);


export const selectSessionIsCreated = createSelector(
  selectSession,
  session => session.isCreated
);

export const selectSessionIsJoined = createSelector(
  selectSession,
  session => session.isJoined
);
