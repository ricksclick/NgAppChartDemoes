import { TestBed } from '@angular/core/testing';

import { Highchart.DataService } from './highchart.data.service';

describe('Highchart.DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Highchart.DataService = TestBed.get(Highchart.DataService);
    expect(service).toBeTruthy();
  });
});
