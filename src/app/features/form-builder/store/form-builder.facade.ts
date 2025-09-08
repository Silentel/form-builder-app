import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './form-builder.actions';
import { selectAllFields } from './form-builder.selectors';
import { Observable } from 'rxjs';
import { Field } from '../models/field';

@Injectable({ providedIn: 'root' })
export class FormBuilderFacade {
  private store = inject(Store);
  fields$: Observable<Field[]> = this.store.select(selectAllFields);

  addField(field: Field) { this.store.dispatch(Actions.addField({ field })); }
  updateField(index: number, field: Field) { this.store.dispatch(Actions.updateField({ index, field })); }
  removeField(index: number) { this.store.dispatch(Actions.removeField({ index })); }
  clear() { this.store.dispatch(Actions.clearFields()); }
}
