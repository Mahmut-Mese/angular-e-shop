import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  baseUrl = 'http://localhost:3500/';
  token: string;
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }
  addProduct(product: Product): Observable<Product> {
    console.log(this.token);
    return this.http.post<Product>(this.baseUrl + 'products', product, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      }),
    });
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      this.baseUrl + 'products/' + product.id,
      product,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer<${this.token}>`
        }),
      }
    );
  }
  deleteProduct(product: Product): Observable<Product> {
    console.log(product.id)

    return this.http.delete<Product>(
      this.baseUrl + 'products/' + product.id,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer<${this.token}>`
        }),
      }
    );
  }
  addCategory(Category: Category): Observable<Category> {
    console.log(this.token);
    return this.http.post<Category>(this.baseUrl + 'categories', Category, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      }),
    });
  }
  updateCategory(Category: Category): Observable<Category> {
    console.log(Category);
    return this.http.put<Category>(
      this.baseUrl + 'categories/' + Category.id,
      Category,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer<${this.token}>`
        }),
      }
    );
  }
  deleteCategory(Category: Category): Observable<Category> {

    return this.http.delete<Product>(
      this.baseUrl + 'categories/' + Category.id,
      {
        headers: new HttpHeaders({
          "Authorization": `Bearer<${this.token}>`
        }),
      }
    );
  }
  authentication(username: string, password: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + 'login', {
        username: username,
        password: password,
      })
      .pipe(
        map((response) => {
          this.token = response.success ? response.token : null;
          console.log(this.token);
          return response.success;
        })
      );
  }
}
