import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  public selectedCategory: Category = null;
  @Output() category = new EventEmitter<Category>();
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ) {}

  ngOnInit(): void {}
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  changeCategory(newCategory?: Category) {
    //  this.selectedCategory = newCategory;
    this.category.emit(newCategory);
    //this.productRepository.getProducts(this.selectedCategory);
  }
}
