import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeRoutingModule } from './user-home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserHomeComponent } from './user-home.component';
import { UserViewComponent } from './pages/user-view/user-view.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    HeaderComponent,
    FooterComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule
  ]
})
export class UserHomeModule { }
console.log("user module loaded")