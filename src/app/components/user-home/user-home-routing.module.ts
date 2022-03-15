import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalDetailComponent } from './pages/personal-detail/personal-detail.component';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [
  {
    path: '', component: UserHomeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'personal-detail', component: PersonalDetailComponent },
      { path: 'education', component: EducationComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
