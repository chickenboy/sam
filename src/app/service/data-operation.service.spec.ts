import { TestBed, inject } from '@angular/core/testing';

import { DataOperationService } from './data-operation.service';

describe('DataOperationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataOperationService]
    });
  });

  it('should be created', inject([DataOperationService], (service: DataOperationService) => {
    expect(service).toBeTruthy();
  }));
});
