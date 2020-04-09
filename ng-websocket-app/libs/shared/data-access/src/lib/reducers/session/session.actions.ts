import { createAction, props } from '@ngrx/store';


export const StartSession = createAction(
  '[Session] StartSession',
  props<{ name: string }>()
);
