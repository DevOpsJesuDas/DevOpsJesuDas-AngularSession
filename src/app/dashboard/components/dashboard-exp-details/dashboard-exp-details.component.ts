import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output()
  expId: EventEmitter<string> = new EventEmitter<string>();

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    console.log('Inpup value:::==>', this.exp);
  }

  deleteExp(id: string) {
    console.log('In Child :::::' + id);
    this.expId.emit(id);
  }
}
