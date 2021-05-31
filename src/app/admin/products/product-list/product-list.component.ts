import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productRepository: ProductRepository) {}

  ngOnInit(): void {}
  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }
  deleteProduct(product:Product) {
    console.log(product.id)

    return this.productRepository.deleteProduct(product);
  }
}
