import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faqs } from '../../configs/home.config';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  faqs = faqs;
}
