import { createAction, props } from '@ngrx/store';

export const logout = createAction('[Login Component] DO LOGOUT');
export const loginSuccess = createAction('[Login Component] DO LOGIN', props<{ email }>());
export const loginError = createAction('[Login Component] LOGIN ERROR', props<{ error: string }>());