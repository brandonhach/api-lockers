import { Component } from '@angular/core';
import { EyeIcon, LucideAngularModule, PencilIcon } from 'lucide-angular';

@Component({
  selector: 'app-service-card',
  imports: [LucideAngularModule],
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  readonly PencilIcon = PencilIcon;
  readonly EyeIcon = EyeIcon;
}
