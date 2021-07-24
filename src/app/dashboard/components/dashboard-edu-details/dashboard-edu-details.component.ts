import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-edu-details',
  templateUrl: './dashboard-edu-details.component.html',
  styleUrls: ['./dashboard-edu-details.component.css'],
})
export class DashboardEduDetailsComponent implements OnInit {
  @Input()
  edu: any[] = [];
  @Output()
  edId: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log('Inpup value:::==>', this.edu);
  }
  deleteEdu(id: string) {
    console.log('In Child :::::' + id);
    this.edId.emit(id);
  }
}
