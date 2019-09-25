import { TestBed } from '@angular/core/testing';

import { MediaService } from './media.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [
    HttpClientTestingModule,
    RouterTestingModule.withRoutes([]),
  ]}));

  it('should be created', () => {
    const service: MediaService = TestBed.get(MediaService);
    expect(service).toBeTruthy();
  });
});
