import { TestBed, inject } from '@angular/core/testing';

import { MetArtApiService } from './met-art-api.service';

describe('MetArtApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetArtApiService]
    });
  });

  it('should be created', inject([MetArtApiService], (service: MetArtApiService) => {
    expect(service).toBeTruthy();
  }));
});
