import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-link',
  imports: [RouterLink],
  templateUrl: './home-link.component.html',
  styleUrl: './home-link.component.css',
})
export class HomeLinkComponent {
  @Input() image = '';
  @Input() title = '';
  @Input() link = '';
  @Input() alt = '';
}
