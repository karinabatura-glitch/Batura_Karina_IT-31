import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Головна</a>
      <a routerLink="/products" routerLinkActive="active">Список товарів</a>
      <a routerLink="/products/add" routerLinkActive="active">Додати товар</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar { display: flex; gap: 20px; padding: 15px; background: #f8f9fa; font-family: sans-serif; }
    .navbar a { text-decoration: none; color: #333; font-weight: bold; }
    .navbar a.active { color: #007bff; border-bottom: 2px solid #007bff; }
  `]
})
export class AppComponent {}

export { AppComponent as App };