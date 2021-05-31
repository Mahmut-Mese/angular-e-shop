import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private rest: RestService) {}

  authentication(username: string, password: string): Observable<boolean> {
    return this.rest.authentication(username, password);
  }
  get authenticated(): boolean {
    return this.rest.token != null;
  }
  clear() {
    this.rest.token = null;
  }
}
