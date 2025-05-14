import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ManagementComponent } from '../../components/management/management.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, ManagementComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
