import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Etablissement } from '../models/etablissement.model';

@Injectable({
  providedIn: 'root',
})
export class EtablissementService {
  constructor(protected http: HttpClient) { }

  findAll() {
    return this.http
      .get('http://localhost:3000/api/etablissements', {
        // headers: {
        //   Authorization: `Bearer ` + this.auth.getToken()
        // }
      }).pipe(
        map(data => data['hydra:member'] as Etablissement[])
      );
  }

  // public delete(id: string) {
  //   return this.http.delete<Customer>(
  //     'https://5ed8afb04378690016c6a3cb.mockapi.io/customers/' + id
  //   );
  // }

  // public create(customer: Customer) {
  //   return this.http.post<Customer>(
  //     'https://5ed8afb04378690016c6a3cb.mockapi.io/customers/',
  //     customer
  //   );
  // }

  public find(id: string) {
    return this.http.get<Etablissement>(
      'http://localhost:3000/api/etablissements/' + id
    );
  }

  // public update(customer: Customer) {
  //   return this.http.put(
  //     'https://5ed8afb04378690016c6a3cb.mockapi.io/customers/' + customer.id,
  //     customer
  //   );
  // }
}
