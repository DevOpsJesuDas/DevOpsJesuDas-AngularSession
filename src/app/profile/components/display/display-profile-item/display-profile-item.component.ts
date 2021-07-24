import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile';

@Component({
  selector: 'app-display-profile-item',
  templateUrl: './display-profile-item.component.html',
  styleUrls: ['./display-profile-item.component.css'],
})
export class DisplayProfileItemComponent implements OnInit {
  @Input()
  profile: Profile;
  constructor() {}

  ngOnInit(): void {}
}
