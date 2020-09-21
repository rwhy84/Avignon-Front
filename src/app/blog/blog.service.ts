import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { blog } from '../models/blog.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http
      .get('http://localhost:3000/api/blogs', {
        // headers: {
        //   Authorization: `Bearer ` + this.auth.getToken()
        // }
      }).pipe(
        map(data => data['hydra:member'] as blog[])
      );
  }

  public find(id: string) {
    return this.http.get<blog>(
      'http://localhost:3000/api/blogs/' + id
    );
  }
}
