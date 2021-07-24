import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
})
export class ProfileHeaderComponent implements OnInit {
  @Input()
  name: any;
  @Input()
  company: any;
  @Input()
  status: any;
  @Input()
  location: any;
  constructor() {}

  ngOnInit(): void {}
}
