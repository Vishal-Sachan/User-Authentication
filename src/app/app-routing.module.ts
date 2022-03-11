import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';

const routes: Routes = [
  { path: 'signup', component: UserSignupComponent },
  { path: '', component: UserLoginComponent },
  { path: 'user', loadChildren: () => import('../app/components/user-home/user-home.module').then(m => m.UserHomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
