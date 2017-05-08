import { TestBed, inject } from '@angular/core/testing';

import { HellojsService } from './hellojs.service';

describe('HellojsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HellojsService]
    });
  });

  it('should ...', inject([HellojsService], (service: HellojsService) => {
    expect(service).toBeTruthy();
  }));
});
