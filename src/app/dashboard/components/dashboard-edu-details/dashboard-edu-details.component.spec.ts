import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEduDetailsComponent } from './dashboard-edu-details.component';

describe('DashboardEduDetailsComponent', () => {
  let component: DashboardEduDetailsComponent;
  let fixture: ComponentFixture<DashboardEduDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEduDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEduDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
