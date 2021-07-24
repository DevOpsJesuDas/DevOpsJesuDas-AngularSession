import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptors } from './inteceptors';
import { SubjectService } from './services/subject.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [httpInterceptors, SubjectService],
})
export class SharedModule {}
