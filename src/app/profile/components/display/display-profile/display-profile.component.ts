import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/profile/models/profile';
import { ProfileService } from 'src/app/profile/service/profile.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css'],
})
export class DisplayProfileComponent implements OnInit {
  profile: any = [];
  _userId: any = '';
  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this._userId = JSON.parse(localStorage.getItem('userdetails')).id;
    this.profileService.getProfileDetailsByUserId(id).subscribe(
      (res) => {
        console.log('getProfileDetailsByUserId::::', JSON.stringify(res));
        this.profile = res;
      },
      (err) => {
        console.log('Error::::', JSON.stringify(err));
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

  editProfile() {
    this.router.navigate(['/profile/update']);
  }
}
