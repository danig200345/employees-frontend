import { Routes } from '@angular/router';
import { Checks } from './pages/checks/checks';

export const routes: Routes = [
  {
    path: 'checks',
    component: Checks
  },
  {
    path: '',
    redirectTo: 'checks',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'checks'
  }
];
