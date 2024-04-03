import { TestBed } from '@angular/core/testing';

import { MermaService } from './merma.service';

describe('MermaService', () => {
  let service: MermaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MermaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
