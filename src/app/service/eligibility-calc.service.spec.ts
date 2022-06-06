import { TestBed } from '@angular/core/testing';
import { EligibilityCalcService } from './eligibility-calc.service';



describe('EligibilityCalcService', () => {
  let service: EligibilityCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EligibilityCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
