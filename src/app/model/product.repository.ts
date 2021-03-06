import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository implements OnInit {
  private products: Product[] = [];
  constructor(private restService: RestService) {
    this.restService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  ngOnInit() {}
  getProduct(id: number): Product {
    return this.products.find((i) => i.id == id);
  }
  getProducts(category: Category = null): Product[] {
    if (category) {
      console.log(this.products[0]['category']);
      // let jsonProducts = JSON.parse(this.products);

      let abc = this.products.filter((p) => p['category'] == category['name']);
      console.log(abc);
      return abc;
    } else {
      return this.products;
    }
  }
  saveProduct(product: Product) {
    if (product.id == null || product.id == 0 || product.id == undefined) {
      console.log(product);
      this.restService
        .addProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.restService.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product
        );
      });
    }
  }
  deleteProduct(product:Product) {
    console.log(product.id)
    this.restService.deleteProduct(product).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == product.id),
        1
      );
    });
  }
}
