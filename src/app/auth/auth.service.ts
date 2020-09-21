import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs/operators";
import jwtDecode from 'jwt-decode'
import { Subject, interval } from 'rxjs';
import * as jwt_decode from 'jwt-decode'
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: user;


  authChanged = new Subject<boolean>();

  constructor(private http: HttpClient) {

    if (this.getToken()) {

      this.user = jwtDecode(this.getToken());
    }

    interval(1000).subscribe(() => {
      this.authChanged.next(this.isAuthenticated())
    })

  }


  getToken() {

    return window.localStorage.getItem('token');
  }

  logout() {
    window.localStorage.removeItem('token');
    this.authChanged.next(false);
  }

  isAuthenticated() {
    const token = window.localStorage.getItem('token');

    if (!token) {
      return false;
    }



    const data = jwtDecode(token);


    var tempsEnMs = Date.now()


    return data.exp * 1000 > Date.now();


    return window.localStorage.getItem('token') !== null;


  }




  authenticate(credentials) {
    return this.http.post('http://localhost:3000/api/login_token', credentials).pipe(
      tap((data: { token: string }) => {
        window.localStorage.setItem('token', data.token);

        this.user = jwtDecode(data.token);
        this.authChanged.next(true);
      })
    );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }




}

export interface Credentials {

  email: string;
  password: string;
}
