import { createReducer, on } from '@ngrx/store';
import * as Actions from './form-builder.actions';
import { Field } from '../models/field';

export interface FormBuilderState {
  fields: Field[];
}

export const initialState: FormBuilderState = {
  fields: []
};

export const formBuilderFeatureKey = 'formBuilder';

export const formBuilderReducer = createReducer(
  initialState,
  on(Actions.setFields, (_, { fields }) => ({ fields: [...fields] })),
  on(Actions.addField, (state, { field }) => ({ ...state, fields: [...state.fields, field] })),
  on(Actions.updateField, (state, { index, field }) => ({
    ...state,
    fields: state.fields.map((f, i) => (i === index ? field : f))
  })),
  on(Actions.removeField, (state, { index }) => ({
    ...state,
    fields: state.fields.filter((_, i) => i !== index)
  })),
  on(Actions.clearFields, state => ({ ...state, fields: [] }))
);
