import { TestBed } from '@angular/core/testing';

import { LegumeFruitService } from './legume-fruit.service';

describe('LegumeFruitService', () => {
  let service: LegumeFruitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegumeFruitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
