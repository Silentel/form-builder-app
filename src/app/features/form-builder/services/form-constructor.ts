import { Injectable, signal } from '@angular/core';
import { Field } from '../models/field';

@Injectable({
  providedIn: 'root'
})
export class FormConstructor {
  private _formFields = signal<Field[]>([]);
  public formFields = this._formFields.asReadonly();

  constructor() { }

  addField(newField: Field): void {
    this._formFields.update(fields => [...fields, newField]);
  }

  updateField(index: number, updatedField: Field): void {
    this._formFields.update(fields =>
      fields.map((field, i) => i === index ? updatedField : field)
    );
  }

  removeField(index: number): void {
    this._formFields.update(fields =>
      fields.filter((_, i) => i !== index)
    );
  }
}
