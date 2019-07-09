import { TestBed } from '@angular/core/testing';

import { SuperService } from './super.service';

describe('SuperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperService = TestBed.get(SuperService);
    expect(service).toBeTruthy();
  });
});
