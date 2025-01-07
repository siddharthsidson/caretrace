import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'my-dashboard',
    loadChildren: () =>
      import('./pages/my-dashboard/my-dashboard-routing.module').then(
        (m) => m.MyDashboardRoutingModule
      ),
  },
];
