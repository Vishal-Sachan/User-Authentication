import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeRoutingModule } from './user-home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserHomeComponent } from './user-home.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ]
})
export class UserHomeModule { }
