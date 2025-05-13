import { Component } from '@angular/core';
import {
  LucideAngularModule,
  LayoutDashboardIcon,
  SettingsIcon,
  MessageSquareHeartIcon,
  LogOutIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  // Icons
  readonly LayoutDashboardIcon = LayoutDashboardIcon;
  readonly SettingsIcon = SettingsIcon;
  readonly MessageSquareHeartIcon = MessageSquareHeartIcon;
  readonly LogOutIcon = LogOutIcon;
}
