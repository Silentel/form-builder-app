import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FormBuilderFacade } from './form-builder.facade';
import * as Actions from './form-builder.actions';
import { Field } from '../models/field';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FormBuilderFacade', () => {
  let facade: FormBuilderFacade;
  let store: MockStore;

  const initialState = {
    formBuilder: {
      fields: []
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilderFacade,
        provideMockStore({ initialState }),
        provideZonelessChangeDetection()
      ]
    });

    facade = TestBed.inject(FormBuilderFacade);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should dispatch addField action', () => {
    const spy = spyOn(store, 'dispatch');
    const field: Field = {
      type: 'text',
      label: 'Test',
      name: 'test',
      required: false
    };

    facade.addField(field);

    expect(spy).toHaveBeenCalledWith(Actions.addField({ field }));
  });
});
