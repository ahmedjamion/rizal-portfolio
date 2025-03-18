import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutRizalComponent } from './pages/about-rizal/about-rizal.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MyClassworksComponent } from './pages/my-classworks/my-classworks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Life, Works & Writings of Rizal',
    component: HomeComponent,
  },
  {
    path: 'about-rizal',
    title: 'About Rizal',
    component: AboutRizalComponent,
  },
  {
    path: 'about-me',
    title: 'About Me',
    component: AboutMeComponent,
  },
  {
    path: 'my-classworks',
    title: 'My Classworks',
    component: MyClassworksComponent,
  },
];
