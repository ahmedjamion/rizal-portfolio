import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroBars3, heroXMark } from '@ng-icons/heroicons/outline';
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
  isScreenSmall = signal(false);
  isNavVisible = signal(false);

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isScreenSmall.set(window.innerWidth < 768);
    if (!this.isScreenSmall) {
      this.isNavVisible.set(false);
    }
  }

  toggleNav() {
    this.isNavVisible.set(!this.isNavVisible());
  }
}
