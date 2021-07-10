import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptors } from '../shared/inteceptors';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, UserRoutingModule],
  providers: [UserService, httpInterceptors],
})
export class UserModule {}
