import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  selectedProduct: Product = null;
  constructor(private cart: Cart, private router: Router) {}
  addProductToCart(p: Product) {
    this.cart.addItem(p);
    this.router.navigateByUrl('cart');
  }
  displayDetail(product: Product) {
    this.selectedProduct = product;
  }
  hideDetail() {
    this.selectedProduct = null;
  }
  ngOnInit(): void {}
}
