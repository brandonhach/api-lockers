import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FileIcon,
  LucideAngularModule,
  PencilIcon,
  PlusIcon,
  SearchIcon,
} from 'lucide-angular';

@Component({
  selector: 'app-management',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './management.component.html',
})
export class ManagementComponent {
  readonly PlusIcon = PlusIcon;
  readonly SearchIcon = SearchIcon;
  readonly FileIcon = FileIcon;
  readonly PencilIcon = PencilIcon;
  items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
}
