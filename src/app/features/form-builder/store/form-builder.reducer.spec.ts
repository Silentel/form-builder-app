import { formBuilderReducer, initialState } from './form-builder.reducer';
import * as Actions from './form-builder.actions';
import { Field } from '../models/field';

describe('formBuilderReducer', () => {
  it('should return initial state', () => {
    const action = {} as any;
    const state = formBuilderReducer(undefined, action);

    expect(state).toEqual(initialState);
  });

  it('should add field', () => {
    const field: Field = {
      type: 'text',
      label: 'Test Label',
      name: 'test_name',
      required: false
    };

    const action = Actions.addField({ field });
    const state = formBuilderReducer(initialState, action);

    expect(state.fields.length).toBe(1);
    expect(state.fields[0]).toEqual(field);
  });

  it('should remove field', () => {
    const field: Field = {
      type: 'text',
      label: 'Test Label',
      name: 'test_name',
      required: false
    };

    const stateWithField = formBuilderReducer(initialState, Actions.addField({ field }));
    const stateAfterRemoval = formBuilderReducer(
      stateWithField,
      Actions.removeField({ index: 0 })
    );

    expect(stateAfterRemoval.fields.length).toBe(0);
  });
});
