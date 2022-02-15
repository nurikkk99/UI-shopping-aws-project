import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Product} from "./product";
import {MockProducts} from "./mock-products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(MockProducts);
    return products;
  }

  getProduct(id: number): Observable<Product> {
    const product = MockProducts.find(p => p.id === id)!;
      return of(product);
  }

}
