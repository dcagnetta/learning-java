import { SessionState } from './session.reducer';
import { selectSessionState } from '../index';
import { createSelector } from '@ngrx/store';

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

export const selectSessionId = createSelector(
  selectSession,
  session => session.id
);

export const selectSessionIsCreated = createSelector(
  selectSession,
  session => session.isCreated
);

export const selectSessionIsJoined = createSelector(
  selectSession,
  session => session.isJoined
);

/* Checks if the session is started by looking at isStarted or isJoined */
export const selectSessionIsStarted = createSelector(
  selectSessionIsCreated,
  selectSessionIsJoined,
  (isCreated, isJoined) => isCreated || isJoined
);
