import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;
  constructor(private route: Router, private rest: RestService) {}

  ngOnInit(): void {}
  login(form: NgForm) {
    if (form.valid) {
      this.rest
        .authentication(this.username, this.password)
        .subscribe((response) => {
          if (response) {
            this.route.navigateByUrl('/admin/main');
          }
          this.errorMessage = 'hatalı username';
        });
    } else {
      this.errorMessage = 'bilgileri eksiksiz girin';
    }
  }
}
