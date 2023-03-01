import { TestBed } from '@angular/core/testing';

import { ForumDetailService } from './forum-detail.service';

describe('ForumDetailService', () => {
  let service: ForumDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
