import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../profile/service/profile.service';
import { httpInterceptors } from '../shared/inteceptors';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { DashboardExpDetailsComponent } from './components/dashboard-exp-details/dashboard-exp-details.component';
import { DashboardEduDetailsComponent } from './components/dashboard-edu-details/dashboard-edu-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionComponent,
    DashboardExpDetailsComponent,
    DashboardEduDetailsComponent,
  ],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class DashboardModule {}
