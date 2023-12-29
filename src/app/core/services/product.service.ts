import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:3000';
  private productsEndpoint = '/electronic-products';

  constructor(private http: HttpClient) {}

  private get electronicProductsUrl(): string {
    return `${this.baseUrl}${this.productsEndpoint}`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.electronicProductsUrl).pipe(
      map((data) => data),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error.message || error);
  }
}
