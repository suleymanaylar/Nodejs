import { TestBed } from '@angular/core/testing';

import { AuthInterceService } from './auth-interce.service';

describe('AuthInterceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthInterceService = TestBed.get(AuthInterceService);
    expect(service).toBeTruthy();
  });
});
