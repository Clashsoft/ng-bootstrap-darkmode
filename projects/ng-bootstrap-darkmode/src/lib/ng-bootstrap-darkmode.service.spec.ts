import { TestBed } from '@angular/core/testing';

import { NgBootstrapDarkmodeService } from './ng-bootstrap-darkmode.service';

describe('NgBootstrapDarkmodeService', () => {
  let service: NgBootstrapDarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBootstrapDarkmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
