import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Builder } from '../components/builder/builder';
import { Preview } from '../components/preview/preview';

@Component({
  selector: 'app-form-builder-page',
  standalone: true,
  imports: [CommonModule, Builder, Preview],
  template: `
    <div class="">
      <app-builder></app-builder>
      <app-preview></app-preview>
    </div>
  `,
})
export class FormBuilderPage {}
