import { TestBed, inject } from '@angular/core/testing';

import { PowerbuyService } from './powerbuy.service';

describe('PowerbuyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerbuyService]
    });
  });

  it('should be created', inject([PowerbuyService], (service: PowerbuyService) => {
    expect(service).toBeTruthy();
  }));
});
