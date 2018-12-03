import { TestBed } from '@angular/core/testing';

import { ValorService } from './valor.service';

describe('ValorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValorService = TestBed.get(ValorService);
    expect(service).toBeTruthy();
  });
});
