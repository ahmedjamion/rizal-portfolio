import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroBars3, heroXMark } from '@ng-icons/heroicons/outline';
import { NavComponent } from '../nav/nav.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterLink, NgClass, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private routerSubscription!: Subscription;
  constructor(private router: Router) {}

  menuIcon = heroBars3;
  closeIcon = heroXMark;
  isScreenSmall = signal(false);
  isNavVisible = signal(false);

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isNavVisible.set(false);
  }

  toggleNav() {
    this.isNavVisible.set(!this.isNavVisible());
  }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.isNavVisible()) {
        this.toggleNav();
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
