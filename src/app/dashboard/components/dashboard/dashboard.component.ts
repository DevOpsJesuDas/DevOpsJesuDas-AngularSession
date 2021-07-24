import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/service/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profile: any = {};
  error: any = {};
  userName: string;
  userDetails: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('userdetails')).name;

    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));

    console.log('===========', this.userDetails, '==========');
    console.log('===========', this.userDetails.name, '==========');

    this.profileService.getProfile().subscribe(
      (res) => {
        console.log('Response::', JSON.stringify(res));
        this.profile = res;
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

  deleteExperience(expId: string) {
    console.log('In Parent :::::' + expId);
    this.profileService.deleteExperience(expId).subscribe(
      (res) => {
        console.log('Response::', JSON.stringify(res));
        this.profile = res;
        // this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log('Error::::', JSON.stringify(err));
        this.profile = null;
      }
    );
  }

  deleteEducation(edId: string) {
    console.log('In Parent :::::' + edId);
    this.profileService.deleteEducation(edId).subscribe(
      (res) => {
        console.log('Response::', JSON.stringify(res));
        this.profile = res;
        // this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log('Error::::', JSON.stringify(err));
        this.profile = null;
      }
    );
  }

  deleteProfile() {
    console.log('In Delete :::::');
    this.profileService.deleteProfile().subscribe(
      (res) => {
        localStorage.clear();
        console.log('Response::', JSON.stringify(res));
        this.router.navigate(['/user/login']);
      },
      (err) => {
        console.log('Error::::', JSON.stringify(err));
      }
    );
  }
}
