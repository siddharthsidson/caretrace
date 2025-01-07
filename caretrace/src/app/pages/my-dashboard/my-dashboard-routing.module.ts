import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardHomeComponent } from '../dashboard-home/dashboard-home.component';
import { authGuard } from '../../Authentication/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard-home',
        component: DashboardHomeComponent,
        canActivate: [authGuard],
      },
      { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyDashboardRoutingModule {}
