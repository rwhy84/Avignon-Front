import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<user[] | user> {

  constructor(private userservice: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<user[] | user> {

    if (route.paramMap.has('id')) {
      return this.userservice.find(+route.paramMap.get('id'));
    }

    return this.userservice.findAll();
  }
}
