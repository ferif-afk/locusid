import { TestBed } from '@angular/core/testing';

import { ListmemberServiceService } from './listmember-service.service';

describe('ListmemberServiceService', () => {
  let service: ListmemberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListmemberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
