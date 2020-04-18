/*
* Selects the state slice
* */
import { createSelector } from '@ngrx/store';
import { selectEstimationState } from '@ng-websocket-app/shared/data-access';
import { EstimationState } from './estimation.reducer';

export const selectEstimation = createSelector(
  selectEstimationState,
  ( state: EstimationState ) => state
);


/*
* Property selectors
* */
export const selectEstimationItems = createSelector(
  selectEstimation,
  estimation => estimation.items
);
