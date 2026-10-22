import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Ноутбук', manufacturer: 'Lenovo', description: 'Ноутбук для роботи та навчання' },
    { id: 2, name: 'Смартфон', manufacturer: 'Samsung', description: 'Мобільний телефон з хорошою камерою' },
    { id: 3, name: 'Монітор', manufacturer: 'LG', description: 'IPS монітор з діагоналлю 27 дюймів' }
  ];

  getItems(): Product[] {
    return this.products;
  }

  getItemById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addItem(product: Omit<Product, 'id'>): void {
    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    this.products.push({ id: newId, ...product });
  }
}