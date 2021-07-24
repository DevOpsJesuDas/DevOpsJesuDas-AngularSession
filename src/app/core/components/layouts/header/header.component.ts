import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginFlag: boolean;

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.loginSubject.subscribe(
      (res) => {
        this.loginFlag = res;
      },
      (err) => {
        this.loginFlag = false;
      }
    );
  }
}
