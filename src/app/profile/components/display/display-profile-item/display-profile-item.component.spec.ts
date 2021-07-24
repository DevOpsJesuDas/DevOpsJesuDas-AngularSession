import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfileItemComponent } from './display-profile-item.component';

describe('DisplayProfileItemComponent', () => {
  let component: DisplayProfileItemComponent;
  let fixture: ComponentFixture<DisplayProfileItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProfileItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProfileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
