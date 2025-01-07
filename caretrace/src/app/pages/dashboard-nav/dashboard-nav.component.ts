import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css',
})
export class DashboardNavComponent {
  user = 'Admin';
  constructor(private router: Router) {}
  logOut() {
    localStorage.removeItem('careTraceLoginData');
    this.router.navigate(['/login']);
  }
}
