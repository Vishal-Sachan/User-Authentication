import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UserHomeComponent } from './user-home.component';

const routes: Routes = [
  {
    path: '', component: UserHomeComponent, children: [
      { path: 'view', component: UserViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
