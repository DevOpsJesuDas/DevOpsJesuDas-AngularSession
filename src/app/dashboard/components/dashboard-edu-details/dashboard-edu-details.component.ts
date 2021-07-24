import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-edu-details',
  templateUrl: './dashboard-edu-details.component.html',
  styleUrls: ['./dashboard-edu-details.component.css'],
})
export class DashboardEduDetailsComponent implements OnInit {
  @Input()
  edu: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
