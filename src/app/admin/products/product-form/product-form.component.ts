import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  editing: boolean = false;
  id: number = 0;

  product: Product = new Product();

  constructor(
    private activateRoute: ActivatedRoute,
    private repository: ProductRepository,
    private route: Router
  ) {
    this.editing = activateRoute.snapshot.params['mode'] == 'edit';
    this.id = activateRoute.snapshot.params['id'];

    if (this.editing) {
      this.product = repository.getProduct(this.id);
    }
  }
  save(form: NgForm) {
    console.log(form);
    console.log(this.product);

    this.repository.saveProduct(this.product);
    this.route.navigateByUrl('/admin/main/products');
  }
  ngOnInit(): void {}
}
