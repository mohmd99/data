import { TestBed } from '@angular/core/testing';

import { TrakingService } from './traking.service';

describe('TrakingServiceService', () => {
  let service: TrakingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrakingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
