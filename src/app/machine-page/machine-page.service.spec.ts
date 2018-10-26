import { TestBed, inject } from '@angular/core/testing';

import { MachinePageService } from './machine-page.service';

describe('MachinePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachinePageService]
    });
  });

  it('should be created', inject([MachinePageService], (service: MachinePageService) => {
    expect(service).toBeTruthy();
  }));
});
