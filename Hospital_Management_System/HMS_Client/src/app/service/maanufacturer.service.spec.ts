import { TestBed } from '@angular/core/testing';

import { MaanufacturerService } from './maanufacturer.service';

describe('MaanufacturerService', () => {
  let service: MaanufacturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaanufacturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
