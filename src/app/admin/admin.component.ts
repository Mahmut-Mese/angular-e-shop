import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {}
  logout() {
    this.auth.clear();
    this.route.navigateByUrl('/shop');
  }
  ngOnInit(): void {}
}
