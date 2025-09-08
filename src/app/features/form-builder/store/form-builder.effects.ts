import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import * as ActionsList from './form-builder.actions';
import { Store } from '@ngrx/store';
import { selectAllFields } from './form-builder.selectors';

@Injectable()
export class FormBuilderEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);

  persist$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          ActionsList.addField,
          ActionsList.updateField,
          ActionsList.removeField,
          ActionsList.clearFields
        ),
        withLatestFrom(this.store.select(selectAllFields)),
        tap(([action, fields]) => {
          localStorage.setItem('formFields', JSON.stringify(fields));
        })
      );
    },
    { dispatch: false }
  );
}
