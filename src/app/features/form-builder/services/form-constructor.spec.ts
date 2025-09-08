import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { FormConstructor } from './form-constructor';

describe('FormConstructor', () => {
  let service: FormConstructor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(FormConstructor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
