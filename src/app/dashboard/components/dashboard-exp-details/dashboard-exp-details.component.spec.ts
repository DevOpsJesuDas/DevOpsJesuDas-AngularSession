import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpDetailsComponent } from './dashboard-exp-details.component';

describe('DashboardExpDetailsComponent', () => {
  let component: DashboardExpDetailsComponent;
  let fixture: ComponentFixture<DashboardExpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
