import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutCardComponent } from '../../components/about-card/about-card.component';

@Component({
  selector: 'app-about-rizal',
  imports: [RouterLink, AboutCardComponent],
  templateUrl: './about-rizal.component.html',
  styleUrl: './about-rizal.component.css',
})
export class AboutRizalComponent {}
