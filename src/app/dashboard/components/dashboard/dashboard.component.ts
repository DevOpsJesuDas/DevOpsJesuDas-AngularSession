import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('userdetails')).name;

    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));

    console.log('===========', this.userDetails, '==========');
    console.log('===========', this.userDetails.name, '==========');

    this.profileService.getProfile().subscribe(
      (res) => {
        console.log('Response::', JSON.stringify(res));
        this.profile = JSON.stringify(res);
      },
      (err) => {
        this.profile = null;
        console.log('Error::::', JSON.stringify(err));
        this.error.noprofile = err.error.noprofile;
      }
    );
  }
}
