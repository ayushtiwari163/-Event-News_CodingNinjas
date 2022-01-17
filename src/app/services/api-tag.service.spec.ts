import { TestBed } from '@angular/core/testing';

import { ApiTagService } from './api-tag.service';

describe('ApiTagService', () => {
  let service: ApiTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
