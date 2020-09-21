import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { event } from './event';
import { EventService } from './event.service';


@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<event[] | event> {

  constructor(private eventservice: EventService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<event[] | event> {

    if (route.paramMap.has('id')) {
      return this.eventservice.find(+route.paramMap.get('id'));
    }

    return this.eventservice.findAll();
  }
}
