import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvoComponent } from './fvo.component';

describe('FvoComponent', () => {
  let component: FvoComponent;
  let fixture: ComponentFixture<FvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
