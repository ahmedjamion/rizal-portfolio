import { TestBed } from '@angular/core/testing';

import { ClassworkService } from './classwork.service';

describe('ClassworkService', () => {
  let service: ClassworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
