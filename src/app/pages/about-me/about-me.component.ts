import { Component } from '@angular/core';
import { AboutCardComponent } from '../../components/about-card/about-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [AboutCardComponent, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {}
