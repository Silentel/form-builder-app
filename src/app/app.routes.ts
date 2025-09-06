import { Routes } from '@angular/router';
import { Builder } from './components/builder/builder';
import { Preview } from './components/preview/preview';

export const routes: Routes = [
  { path: '', redirectTo: '/builder', pathMatch: 'full' },
  { path: 'builder', component: Builder },
  { path: 'preview', component: Preview },
];
