import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService, Product } from '../../services/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="detail-container">
      <div *ngIf="product; else notFound">
        <h2>{{ product.name }}</h2>
        <p><strong>Виробник:</strong> {{ product.manufacturer }}</p>
        <p><strong>Опис:</strong> {{ product.description }}</p>
      </div>

      <ng-template #notFound>
        <h2>Товар не знайдено</h2>
      </ng-template>

      <p style="margin-top: 20px;">
        <a routerLink="/products" class="back-link">← Повернутися до списку</a>
      </p>
    </div>
  `,
  styles: [`
    .detail-container { padding: 20px; font-family: sans-serif; }
    .back-link { color: #007bff; text-decoration: none; }
  `]
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product: Product | undefined;
  id: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.product = this.productService.getItemById(this.id);
    });
  }
}