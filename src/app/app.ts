import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { setFields } from './features/form-builder/store/form-builder.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  public readonly title = signal('Конструктор динамических форм');

  constructor(private store: Store) {}

  ngOnInit() {
    const raw = localStorage.getItem('formFields');
    const fields = raw ? JSON.parse(raw) : [];
    this.store.dispatch(setFields({ fields }));
  }
}
