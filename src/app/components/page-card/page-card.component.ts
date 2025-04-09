import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-card',
  imports: [RouterLink],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.css',
})
export class PageCardComponent {
  @Input() image = '';
  @Input() title = '';
  @Input() link = '';
  @Input() alt = '';
}
