import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/builder', pathMatch: 'full' },
  {
    path: 'builder',
    loadComponent: () => import('./features/form-builder/components/builder/builder').then(m => m.Builder)
  },
  {
    path: 'preview',
    loadComponent: () => import('./features/form-builder/components/preview/preview').then(m => m.Preview)
  },
];
