import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeRoutingModule } from './user-home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserHomeComponent } from './user-home.component';
import { PersonalDetailComponent } from './pages/personal-detail/personal-detail.component';
import { EducationComponent } from './pages/education/education.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { UserServiceService } from './services/user-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserHomeComponent,
    HeaderComponent,
    FooterComponent,
    PersonalDetailComponent,
    EducationComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserServiceService
  ]
})
export class UserHomeModule { }
console.log("user module loaded")