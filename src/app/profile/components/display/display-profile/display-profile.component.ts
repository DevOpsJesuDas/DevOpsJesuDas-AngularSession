import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/profile/models/profile';
import { ProfileService } from 'src/app/profile/service/profile.service';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css'],
})
export class DisplayProfileComponent implements OnInit {
  profile: any = [];
  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

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
}
