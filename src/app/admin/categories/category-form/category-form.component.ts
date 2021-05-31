import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  editing: boolean = false;
  id: number = 0;

  Category: Category = new Category();

  constructor(
    private activateRoute: ActivatedRoute,
    private repository: CategoryRepository,
    private route: Router
  ) {
    this.editing = activateRoute.snapshot.params['mode'] == 'edit';
    this.id = activateRoute.snapshot.params['id'];

    if (this.editing) {
      this.Category = repository.getCategory(this.id);
      console.log(this.id);

    }
  }
  save(form: NgForm) {
    console.log(form);
    console.log(this.Category);
    this.repository.saveCategory(this.Category);
    this.route.navigateByUrl('/admin/main/categories');
  }
  ngOnInit(): void {}
}
