import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormBuilderState, formBuilderFeatureKey } from './form-builder.reducer';

export const selectFormBuilderState = createFeatureSelector<FormBuilderState>(formBuilderFeatureKey);

export const selectAllFields = createSelector(selectFormBuilderState, (s) => s?.fields ?? []);
export const selectFieldByIndex = (index: number) =>
  createSelector(selectAllFields, (fields) => fields[index]);
