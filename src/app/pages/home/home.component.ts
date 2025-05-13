import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CtaComponent, FaqComponent, FooterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
