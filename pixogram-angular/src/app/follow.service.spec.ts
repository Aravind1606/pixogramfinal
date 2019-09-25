import { TestBed } from '@angular/core/testing';

import { FollowService } from './follow.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FollowService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientTestingModule,
    RouterTestingModule.withRoutes([]),
  ]}));

  it('should be created', () => {
    const service: FollowService = TestBed.get(FollowService);
    expect(service).toBeTruthy();
  });
});
