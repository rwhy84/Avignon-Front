import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { event } from './event';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(protected http: HttpClient) { }

  findAll(): any {
    return this.http
      .get('http://localhost:3000/api/events', {
        // headers: {
        //   Authorization: `Bearer ` + this.auth.getToken()
        // }
      }).pipe(
        map(data => data['hydra:member'] as Event[])
      );
  }

  // public delete(id: string) {
  //   return this.http.delete<Customer>(
  //     'https://5ed8afb04378690016c6a3cb.mockapi.io/customers/' + id
  //   );
  // }

  create(event: Event) {
    return this.http.post<Event>(
      'http://localhost:3000/api/events',
      event
    );
  }


  update(event: event) {
    return this.http.put<Event>('http://localhost:3000/api/events/' + event.id, event)
  }


  find(id: number) {
    return this.http.get<Event>('http://localhost:3000/api/events/' + id, {

    });
  }






  // public find(id: string) {
  //   return this.http.get<Customer>(
  //     'https://5ed8afb04378690016c6a3cb.mockapi.io/customers/' + id
  //   );
  // }

  // public update(customer: Customer) {
  //   return this.http.put(
  //     'https://5ed8afb04378690016c6a3cb.mockapi.io/customers/' + customer.id,
  //     customer
  //   );
  // }
}
