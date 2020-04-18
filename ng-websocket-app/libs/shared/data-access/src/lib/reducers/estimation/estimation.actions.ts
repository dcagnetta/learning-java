import { createAction, props } from '@ngrx/store';
import { EstimationItem } from '@ng-websocket-app/estimation/domain';

export const AddNewEstimationItem = createAction(
  '[Estimation] AddNewEstimationItem',
  props<{ payload: EstimationItem }>()
);
