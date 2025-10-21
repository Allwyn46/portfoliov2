import { TestBed } from '@angular/core/testing';

import { Lenis } from './lenis';

describe('Lenis', () => {
  let service: Lenis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lenis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
