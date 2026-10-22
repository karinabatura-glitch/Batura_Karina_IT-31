import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <h2>Практична робота №13</h2>
      <p><strong>Тема:</strong> Створення багатосторінкового Angular-застосунку</p>
      <h3>Мета роботи</h3>
      <p>Закріпити навички роботи з Angular та навчитися поєднувати в одному застосунку компоненти, прив'язку даних, сервіси та DI, Routing та динамічні маршрути.</p>
    </div>
  `,
  styles: [`
    .home-container { padding: 20px; font-family: sans-serif; }
  `]
})
export class HomeComponent {}