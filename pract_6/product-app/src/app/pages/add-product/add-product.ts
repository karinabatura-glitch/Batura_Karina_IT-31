import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>Додати новий товар</h2>
      <form #form="ngForm" (ngSubmit)="onSubmit(form)">
        
        <!-- Поле Назва -->
        <div class="form-group">
          <label>Назва:</label>
          <input 
            type="text" 
            name="name" 
            [(ngModel)]="model.name" 
            required 
            minlength="3" 
            maxlength="50"
            #nameRef="ngModel">
          <div *ngIf="submitted && nameRef.invalid" class="error">
            <small *ngIf="nameRef.errors?.['required']">Поле обов'язкове</small>
            <small *ngIf="nameRef.errors?.['minlength']">Введено недостатньо символів (мінімум 3)</small>
            <small *ngIf="nameRef.errors?.['maxlength']">Перевищено максимальну довжину (до 50)</small>
          </div>
        </div>

        <div class="form-group">
          <label>Виробник:</label>
          <input 
            type="text" 
            name="manufacturer" 
            [(ngModel)]="model.manufacturer" 
            required 
            minlength="2" 
            maxlength="40"
            #manufRef="ngModel">
          <div *ngIf="submitted && manufRef.invalid" class="error">
            <small *ngIf="manufRef.errors?.['required']">Поле обов'язкове</small>
            <small *ngIf="manufRef.errors?.['minlength']">Введено недостатньо символів (мінімум 2)</small>
            <small *ngIf="manufRef.errors?.['maxlength']">Перевищено максимальну довжину (до 40)</small>
          </div>
        </div>

        <div class="form-group">
          <label>Опис:</label>
          <textarea 
            name="description" 
            [(ngModel)]="model.description" 
            required 
            minlength="10"
            #descRef="ngModel"></textarea>
          <div *ngIf="submitted && descRef.invalid" class="error">
            <small *ngIf="descRef.errors?.['required']">Поле обов'язкове</small>
            <small *ngIf="descRef.errors?.['minlength']">Введено недостатньо символів (мінімум 10)</small>
          </div>
        </div>

        <button type="submit">Зберегти товар</button>
      </form>
    </div>
  `,
  styles: [`
    .form-container { padding: 20px; max-width: 400px; font-family: sans-serif; }
    .form-group { margin-bottom: 15px; display: flex; flex-direction: column; }
    .form-group input, .form-group textarea { padding: 8px; margin-top: 5px; border: 1px solid #ccc; border-radius: 4px; }
    .error { color: red; font-size: 12px; margin-top: 3px; }
    button { padding: 10px 15px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; }
    button:hover { background: #218838; }
  `]
})
export class AddProductComponent {
  private productService = inject(ProductService);
  private router = inject(Router);

  submitted = false;
  model = {
    name: '',
    manufacturer: '',
    description: ''
  };

  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.invalid) {
      return;
    }

    this.productService.addItem(this.model);
    form.resetForm();
    this.submitted = false;
    this.router.navigate(['/products']);
  }
}