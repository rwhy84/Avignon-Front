import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventListComponent implements OnInit {

  date;
  dateEvent;
  events: Event[] = [];



  constructor(protected service: EventService) { }

  ngOnInit(): void {



    this.service
      .findAll()
      .subscribe((events) => (this.events = events));




    const dateNow = new Date();
    this.date = dateNow;
    console.log(this.date)

  }




}
