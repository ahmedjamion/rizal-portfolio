import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-rizal-section',
  imports: [],
  templateUrl: './about-rizal-section.component.html',
  styleUrl: './about-rizal-section.component.css',
})
export class AboutRizalSectionComponent {
  @Input() image = '';
  @Input() content = '';
}
