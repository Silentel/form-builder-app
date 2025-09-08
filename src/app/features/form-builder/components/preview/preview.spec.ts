import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Preview } from './preview';
import { FormBuilderFacade } from '../../store/form-builder.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Preview', () => {
  let component: Preview;
  let fixture: ComponentFixture<Preview>;

  const initialState = {
    formBuilder: {
      fields: [
        {
          type: 'text',
          label: 'Test Field',
          name: 'test_field',
          required: true
        }
      ]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preview, ReactiveFormsModule],
      providers: [
        provideMockStore({ initialState }),
        FormBuilderFacade,
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Preview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize dynamic form', () => {
    expect(component.dynamicForm).toBeDefined();
  });
});
