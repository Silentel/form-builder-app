import { TestBed } from '@angular/core/testing';

import { FormConstructor } from './form-constructor';

describe('FormConstructor', () => {
  let service: FormConstructor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormConstructor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
