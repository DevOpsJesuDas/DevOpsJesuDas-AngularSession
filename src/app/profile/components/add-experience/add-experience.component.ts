import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from '../../models/experience';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {
  experience: Experience = new Experience();
  error: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  createExperienceSubmit() {
    this.profileService.createExperience(this.experience).subscribe(
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
