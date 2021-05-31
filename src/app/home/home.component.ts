import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {}
  loadProducts() {
    this.router.navigate(['/products'], {
      relativeTo: this.activeRouter.parent,
    });
  }
  go() {
    this.router.navigate(['../products'], { relativeTo: this.activeRouter });
  }
}
