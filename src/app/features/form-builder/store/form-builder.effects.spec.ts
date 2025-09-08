import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { FormBuilderEffects } from './form-builder.effects';
import * as Actions from './form-builder.actions';
import { Field } from '../models/field';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FormBuilderEffects', () => {
  let effects: FormBuilderEffects;
  let actions$: Observable<any>;

  const initialState = {
    formBuilder: {
      fields: []
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilderEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        provideZonelessChangeDetection()
      ]
    });

    effects = TestBed.inject(FormBuilderEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should persist fields to localStorage', () => {
    const field: Field = {
      type: 'text',
      label: 'Test',
      name: 'test',
      required: false
    };

    const setItemSpy = spyOn(Storage.prototype, 'setItem');
    actions$ = of(Actions.addField({ field }));

    effects.persist$.subscribe();

    expect(setItemSpy).toHaveBeenCalled();
  });
});
