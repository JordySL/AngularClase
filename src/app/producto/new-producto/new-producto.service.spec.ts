import { TestBed, inject } from '@angular/core/testing';

import { NewProductoService } from './new-producto.service';

describe('NewProductoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewProductoService]
    });
  });

  it('should be created', inject([NewProductoService], (service: NewProductoService) => {
    expect(service).toBeTruthy();
  }));
});
