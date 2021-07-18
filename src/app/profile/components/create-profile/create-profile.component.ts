import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: Profile = new Profile();
  error: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  createProfileSubmit() {
    this.profileService.createProfile(this.profile).subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        // Need to Handle Error
        this.error = err.error;
      }
    );
  }
}
