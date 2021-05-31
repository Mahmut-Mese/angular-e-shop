import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(private CategoryRepository: CategoryRepository) {}

   getCategories(): Category[] {
    return this.CategoryRepository.getCategories();
  }
  deleteCategory(Category:Category) {
    console.log(Category.id)

    return this.CategoryRepository.deleteCategory(Category);
  }
  ngOnInit(): void {
  }

}
