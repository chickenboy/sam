import { TestBed, inject } from '@angular/core/testing';

import { UserDataSourceService } from './user-data-source.service';

describe('UserDataSourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataSourceService]
    });
  });

  it('should be created', inject([UserDataSourceService], (service: UserDataSourceService) => {
    expect(service).toBeTruthy();
  }));
});
