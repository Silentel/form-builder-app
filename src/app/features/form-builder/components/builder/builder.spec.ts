import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Builder } from './builder';
import { FormBuilderFacade } from '../../store/form-builder.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Builder', () => {
  let component: Builder;
  let fixture: ComponentFixture<Builder>;

  const initialState = {
    formBuilder: {
      fields: [
        { type: 'text', label: 'Test Label', name: 'test_name', required: false }
      ]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Builder, ReactiveFormsModule],
      providers: [
        provideMockStore({ initialState }),
        FormBuilderFacade,
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Builder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize field form', () => {
    expect(component.fieldForm).toBeDefined();
    expect(component.fieldForm.controls['type'].value).toBe('text');
  });

  it('should have field types', () => {
    expect(component.fieldTypes).toEqual([
      'text', 'textarea', 'checkbox', 'select', 'email', 'number'
    ]);
  });
});
