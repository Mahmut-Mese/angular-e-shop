import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryRepository {
  private categories: Category[] = [];
  
  constructor(private restService: RestService) {
    this.restService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  getCategory(id: number): Category {
    return this.categories.find((i) => i.id == id);
    
  }
  getCategories(): Category[] {
    return this.categories;
  }
  saveCategory(Category: Category) {
    console.log(Category);
    if (Category.id == null || Category.id == 0 || Category.id == undefined) {
      this.restService.addCategory(Category)
        .subscribe((c) => this.categories.push(c));
    } else {
      this.restService.updateCategory(Category).subscribe((c) => {
        this.categories.splice(
          this.categories.findIndex((c) => c.id == Category.id),
          1,
          Category
        );
      });
    }
  }
  deleteCategory(Category:Category) {
    console.log(Category.id)
    this.restService.deleteCategory(Category).subscribe((c) => {
      this.categories.splice(
        this.categories.findIndex((c) => c.id == Category.id),
        1
      );
    });
  }
}
