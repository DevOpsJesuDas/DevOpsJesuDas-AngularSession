import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateProfileComponent,
  },
  {
    path: 'experience',
    component: AddExperienceComponent,
  },
  {
    path: 'education',
    component: AddEducationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
