import { TestBed } from '@angular/core/testing';

import { BlockedService } from './blocked.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlockedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
    ]
  }));

  it('should be created', () => {
    const service: BlockedService = TestBed.get(BlockedService);
    expect(service).toBeTruthy();
  });
});
