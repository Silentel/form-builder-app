import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { formBuilderReducer } from './app/features/form-builder/store/form-builder.reducer';
import { FormBuilderEffects } from './app/features/form-builder/store/form-builder.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideZonelessChangeDetection } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideZonelessChangeDetection(),
    provideStore({ formBuilder: formBuilderReducer }),
    provideEffects([FormBuilderEffects]),
    provideStoreDevtools({ maxAge: 25 })
  ]
}).catch(err => console.error(err));
