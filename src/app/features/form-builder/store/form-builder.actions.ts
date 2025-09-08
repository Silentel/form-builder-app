import { createAction, props } from '@ngrx/store';
import { Field } from '../models/field';

export const setFields = createAction('[FormBuilder] Set Fields', props<{ fields: Field[] }>());
export const addField = createAction('[FormBuilder] Add Field', props<{ field: Field }>());
export const updateField = createAction('[FormBuilder] Update Field', props<{ index: number; field: Field }>());
export const removeField = createAction('[FormBuilder] Remove Field', props<{ index: number }>());
export const clearFields = createAction('[FormBuilder] Clear Fields');
