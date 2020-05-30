import { TestBed } from '@angular/core/testing';

import { SoundMakerService } from './sound-maker.service';

describe('SoundMakerService', () => {
  let service: SoundMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
