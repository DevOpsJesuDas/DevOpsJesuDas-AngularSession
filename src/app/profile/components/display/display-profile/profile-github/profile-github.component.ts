import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-github',
  templateUrl: './profile-github.component.html',
  styleUrls: ['./profile-github.component.css'],
})
export class ProfileGithubComponent implements OnInit {
  @Input()
  profile: any;
  constructor() {}

  ngOnInit(): void {}
}
