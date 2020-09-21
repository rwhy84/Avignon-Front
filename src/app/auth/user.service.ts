import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(user: user) {
    return this.http.post<user>('http://localhost:3000/api/users', user)
  }

  update(user: user) {
    return this.http.put<user>('http://localhost:3000/api/users/' + user.id, user)
  }

  findAll() {
    return this.http
      .get('http://localhost:3000/api/users', {
      }).pipe(
        map(data => data['hydra:member'] as user[])
      );
  }

  find(id: number) {
    return this.http.get<user>('http://localhost:3000/api/users/' + id, {

    });
  }
}
