import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Product} from "./product";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateProductDto} from "./product-class";
import {environment} from "../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = environment.apiUrl + '/api/goods'

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  create(model: CreateProductDto): Observable<CreateProductDto> {
    return this.http.post<CreateProductDto>(this.productsUrl, model, httpOptions)
  }
}
