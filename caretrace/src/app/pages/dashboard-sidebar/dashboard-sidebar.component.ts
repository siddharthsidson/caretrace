import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css',
})
export class DashboardSidebarComponent {
  @Output() toggle = new EventEmitter<boolean>();
  isSidebarClosed = true;
  expandIcon = 'fa-solid fa-angles-right fa-xl';
  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.isSidebarClosed
      ? (this.expandIcon = 'fa-solid fa-angles-right fa-xl')
      : (this.expandIcon = 'fa-solid fa-angles-left fa-xl');
    this.toggle.emit(this.isSidebarClosed);
  }
}
