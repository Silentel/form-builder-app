import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Field } from '../../models/field';
import { FormBuilderFacade } from '../../store/form-builder.facade';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './builder.html',
  styleUrls: ['./builder.scss']
})
export class Builder {
  private fb = inject(FormBuilder);
  private facade = inject(FormBuilderFacade);

  fieldForm: FormGroup;
  fieldTypes = ['text', 'textarea', 'checkbox', 'select', 'email', 'number'];
  editingIndex: number | null = null;
  fields$ = this.facade.fields$;

  constructor() {
    this.fieldForm = this.fb.group({
      type: ['text', Validators.required],
      label: ['', Validators.required],
      name: ['', Validators.required],
      required: [false],
      options: ['']
    });
  }

  onSubmit(): void {
    if (this.fieldForm.valid) {
      const formValue = this.fieldForm.value;
      const newField: Field = {
        type: formValue.type,
        label: formValue.label,
        name: formValue.name,
        required: formValue.required,
        options: formValue.options ? formValue.options.split(',') : undefined
      };

      if (this.editingIndex !== null) {
        this.facade.updateField(this.editingIndex, newField);
        this.editingIndex = null;
      } else {
        this.facade.addField(newField);
      }
      this.fieldForm.reset({ type: 'text', required: false });
    }
  }

  editField(index: number): void {
    this.facade.fields$.subscribe(fields => {
      const field = fields[index];
      this.fieldForm.patchValue({
        ...field,
        options: field.options ? field.options.join(',') : ''
      });
      this.editingIndex = index;
    }).unsubscribe();
  }

  deleteField(index: number): void {
    this.facade.removeField(index);
    if (this.editingIndex === index) {
      this.cancelEdit();
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
    this.fieldForm.reset({ type: 'text', required: false });
  }

  get f() { return this.fieldForm.controls; }
}
