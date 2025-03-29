import { Component } from '@angular/core';
import { HomeLinkComponent } from '../../components/home-link/home-link.component';

@Component({
  selector: 'app-home',
  imports: [HomeLinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
