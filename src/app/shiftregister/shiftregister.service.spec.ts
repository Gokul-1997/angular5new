import { TestBed, inject } from '@angular/core/testing';

import { ShiftregisterService } from './shiftregister.service';

describe('ShiftregisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftregisterService]
    });
  });

  it('should be created', inject([ShiftregisterService], (service: ShiftregisterService) => {
    expect(service).toBeTruthy();
  }));
});
