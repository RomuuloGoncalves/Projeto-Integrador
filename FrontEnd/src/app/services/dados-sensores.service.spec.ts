import { TestBed } from '@angular/core/testing';

import { DadosSensoresService } from './dados-sensores.service';

describe('DadosSensoresService', () => {
  let service: DadosSensoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosSensoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
