import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { DisplayProfileItemComponent } from './components/display/display-profile-item/display-profile-item.component';
import { DisplayProfileComponent } from './components/display/display-profile/display-profile.component';
import { DisplayProfilesComponent } from './components/display/display-profiles/display-profiles.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateProfileComponent,
  },
  {
    path: 'update',
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
  {
    path: 'display-profiles',
    component: DisplayProfilesComponent,
  },
  {
    path: 'display-profile/:id',
    component: DisplayProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
