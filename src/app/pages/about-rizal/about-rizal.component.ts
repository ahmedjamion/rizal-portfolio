import { Component } from '@angular/core';
import { AboutRizalSectionComponent } from '../../components/about-rizal-section/about-rizal-section.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-rizal',
  imports: [AboutRizalSectionComponent, RouterLink],
  templateUrl: './about-rizal.component.html',
  styleUrl: './about-rizal.component.css',
})
export class AboutRizalComponent {}
