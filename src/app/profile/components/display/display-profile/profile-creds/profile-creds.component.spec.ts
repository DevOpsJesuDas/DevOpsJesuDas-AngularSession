import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCredsComponent } from './profile-creds.component';

describe('ProfileCredsComponent', () => {
  let component: ProfileCredsComponent;
  let fixture: ComponentFixture<ProfileCredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCredsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
