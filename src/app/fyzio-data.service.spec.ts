import { TestBed } from '@angular/core/testing';

import { FyzioDataService } from './fyzio-data.service';

describe('FyzioDataService', () => {
  let service: FyzioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FyzioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
