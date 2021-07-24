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

  ngOnInit(): void {
    // Need to get Profile data for Edit it
    // this.getProfileData();
  }

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

  getProfileData() {
    this.profileService.getProfile().subscribe(
      (res) => {
        console.log('Response::', JSON.stringify(res));
        this.profile = res;
        this.profile.skills = res.skills.toString();
      },
      (err) => {
        if (err.error.status === '401') {
          this.router.navigate(['/user/login']);
        }
        this.profile = null;
        console.log('Error::::', JSON.stringify(err));
        this.error.noprofile = err.error.noprofile;
      }
    );
  }
}
