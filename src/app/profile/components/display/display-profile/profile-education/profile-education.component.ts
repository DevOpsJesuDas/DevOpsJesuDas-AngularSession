import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-education',
  templateUrl: './profile-education.component.html',
  styleUrls: ['./profile-education.component.css']
})
export class ProfileEducationComponent implements OnInit {
  @Input ()
  e:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
