import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvoComponent } from './lvo.component';

describe('LvoComponent', () => {
  let component: LvoComponent;
  let fixture: ComponentFixture<LvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
