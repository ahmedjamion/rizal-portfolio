import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import {
  heroBars3,
  heroXMark,
  heroChevronUp,
} from '@ng-icons/heroicons/outline';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, NgClass, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuIcon = heroBars3;
  closeIcon = heroXMark;
  chevronUpIcon = heroChevronUp;
  isScreenSmall = signal(false);
  isNavShown = signal(true);
  ngOnInit() {
    this.isScreenSmall.set(window.innerWidth < 768);
    this.isNavShown.set(!this.isScreenSmall());
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isScreenSmall.set(window.innerWidth < 768);
    this.isNavShown.set(!this.isScreenSmall());
  }

  toggleNav() {
    this.isNavShown.set(!this.isNavShown());
  }
}
