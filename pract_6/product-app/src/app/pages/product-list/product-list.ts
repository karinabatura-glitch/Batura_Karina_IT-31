import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="list-container">
      <h2>Список товарів</h2>
      <div class="product-grid">
        <div *ngFor="let product of products" class="card">
          <h3>{{ product.name }}</h3>
          <p>Виробник: {{ product.manufacturer }}</p>
          <a [routerLink]="['/product', product.id]" class="btn">Детальніше</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list-container { padding: 20px; font-family: sans-serif; }
    .product-grid { display: flex; gap: 15px; flex-wrap: wrap; }
    .card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; width: 220px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .btn { display: inline-block; margin-top: 10px; padding: 6px 12px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; }
    .btn:hover { background: #0056b3; }
  `]
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products: Product[] = this.productService.getItems();
}