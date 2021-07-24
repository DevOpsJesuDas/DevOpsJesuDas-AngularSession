import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-creds',
  templateUrl: './profile-creds.component.html',
  styleUrls: ['./profile-creds.component.css'],
})
export class ProfileCredsComponent implements OnInit {
  @Input()
  profile: any;
  constructor() {}

  ngOnInit(): void {}
}
