import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvoLoanComponent } from './lvo-loan.component';

describe('LvoLoanComponent', () => {
  let component: LvoLoanComponent;
  let fixture: ComponentFixture<LvoLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvoLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvoLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
