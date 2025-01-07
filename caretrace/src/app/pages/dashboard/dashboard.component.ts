import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardNavComponent } from '../dashboard-nav/dashboard-nav.component';
import { DashboardSidebarComponent } from '../dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, DashboardNavComponent, DashboardSidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isSidebarClosed = false;
  handleSidebarToggle(isClosed: boolean) {
    this.isSidebarClosed = isClosed;
  }
}
