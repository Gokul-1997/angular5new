import { TestBed, inject } from '@angular/core/testing';

import { TestpageService } from './testpage.service';

describe('TestpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestpageService]
    });
  });

  it('should be created', inject([TestpageService], (service: TestpageService) => {
    expect(service).toBeTruthy();
  }));
});
