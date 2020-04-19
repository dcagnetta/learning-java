import { createAction, props } from '@ngrx/store';


export const StartSession = createAction(
  '[Session] StartSession',
  props<{ id: string, name: string, shortId: string }>()
);

export const JoinSession = createAction(
  '[Session] JoinSession',
  props<{ shortId: string, person: string }>()
);


export const StopSession = createAction(
  '[Session] StopSession',
  props<{ id: string }>()
);
