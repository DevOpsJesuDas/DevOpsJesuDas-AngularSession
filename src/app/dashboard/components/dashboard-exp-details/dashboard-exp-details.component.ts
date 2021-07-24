import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/service/profile.service';

@Component({
  selector: 'app-dashboard-exp-details',
  templateUrl: './dashboard-exp-details.component.html',
  styleUrls: ['./dashboard-exp-details.component.css'],
})
export class DashboardExpDetailsComponent implements OnInit {
  @Input()
  exp: any[] = [];

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    console.log('Inpup value:::==>', this.exp);
  }

  deleteExp(id: string) {
    this.profileService.deleteExperience(id).subscribe(
      (res) => {
        console.log('Response::', JSON.stringify(res));
      },
      (err) => {
        console.log('Error::::', JSON.stringify(err));
      }
    );
  }
}
