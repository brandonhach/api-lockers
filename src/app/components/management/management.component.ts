import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FileIcon,
  LucideAngularModule,
  PencilIcon,
  PlusIcon,
  SearchIcon,
} from 'lucide-angular';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-management',
  imports: [LucideAngularModule, CommonModule, ServiceCardComponent],
  templateUrl: './management.component.html',
})
export class ManagementComponent {
  readonly PlusIcon = PlusIcon;
  readonly SearchIcon = SearchIcon;
  readonly FileIcon = FileIcon;
  readonly PencilIcon = PencilIcon;
  items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
}
