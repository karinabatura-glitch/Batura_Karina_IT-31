import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductListComponent } from './pages/product-list/product-list';
import { AddProductComponent } from './pages/add-product/add-product';
import { ProductDetailComponent } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: AddProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' }
];