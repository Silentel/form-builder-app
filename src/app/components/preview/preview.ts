import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormData } from '../../models/field';
import { FormConstructor } from '../../services/form-constructor';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preview.html',
  styleUrls: ['./preview.scss']
})
export class Preview {
  private fb = inject(FormBuilder);
  private formBuilderService = inject(FormConstructor);

  formFields = this.formBuilderService.formFields;
  dynamicForm!: FormGroup;
  submittedData: FormData | null = null;

  hasFields = computed(() => this.formFields().length > 0);

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    const group: { [key: string]: AbstractControl } = {};
    const currentFields = this.formFields();

    currentFields.forEach(field => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      group[field.name] = this.fb.control(null, validators);
    });

    this.dynamicForm = this.fb.group(group);
  }

  onSubmit(): void {
    this.markFormGroupTouched(this.dynamicForm);

    if (this.dynamicForm.valid) {
      this.submittedData = this.dynamicForm.value;
      console.log('Данные формы:', this.submittedData);
      alert('Форма успешно отправлена! Проверьте консоль разработчика (F12).');
      this.dynamicForm.reset();
    } else {
      alert('Пожалуйста, заполните все обязательные поля корректно.');
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  get formControls() { return this.dynamicForm?.controls; }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.formControls[fieldName];
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
