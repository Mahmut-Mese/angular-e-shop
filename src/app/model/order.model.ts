import { Injectable } from '@angular/core';
import { Cart } from './cart.model';
@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public email: string;
  public phone: string;

  public isSent: boolean = false;

  constructor(public cart: Cart) {}

  clearOrder() {
    this.id =
      this.name =
      this.address =
      this.city =
      this.email =
      this.phone =
        null;
    this.isSent = false;
    this.cart.clear();
  }
}
