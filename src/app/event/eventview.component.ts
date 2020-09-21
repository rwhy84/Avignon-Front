import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { EventService } from './event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-etablissement',
  template: `


<div class="styleBlog">
  <div class="d-flex justify-content-center align-items-center" style="height: inherit;min-height: initial;width: 100%;position: absolute;left: 0;background-color: rgba(30,41,99,0.23);">
      <div class="d-flex align-items-center order-12" style="height:200px;">
          <div class="container">
              <h1 class="text-center" style="color: rgb(242,245,248);font-size: 45px;font-weight: bold;font-family: Roboto, sans-serif;">{{ event.name }}</h1>

          </div>
      </div>
  </div>
</div>


<div class="container pt-5" *ngIf="event">
    <div class="row">
        <div class="col-sm-12 col-lg-9">

            <h2>{{ event.name }}</h2>
            <p class="description" [innerHTML]="event.description"><br /><br /><br /><br /><br /><br
                /><br /></p>
        </div>
        <div class="col-sm-12 col-lg-3 d-lg-flex flex-column">
            <h5 class="title-cat">Categorie: <span class="cat-content">{{ event.etablissement.category.name }}</span></h5>
            <h5 class="title-cat">Adresse: <span class="cat-content">{{ event.etablissement.adress }}</span></h5>
            <h5 class="title-cat">Debut: <span class="cat-content">{{ event.startEvent |date: 'dd/MM/yyyy hh:mm:ss' }}</span></h5>
            <h5 class="title-cat">Fin: <span class="cat-content">{{ event.endEvent |date: 'dd/MM/yyyy hh:mm:ss' }}</span></h5>


        </div>
    </div>
</div>

<div class="col text-center pb-3" style="padding: 15;"><img class="img-fluid" src="{{ event.coverImage }}" /></div>






  <!-- <ng-container *ngIf="event">
    <p>{{ event.name }}</p>
    <p [innerHTML]="event.description"></p>
    <p>{{ event.startEvent |date: 'dd/MM/yyyy hh:mm:ss' }}</p>
    <p>{{ event.endEvent |date: 'dd/MM/yyyy hh:mm:ss' }}</p>
    <p>{{ event.etablissement.name }}</p>
    <p>{{ event.etablissement.category.name }}</p>
    <img src="http://localhost:3000/images/events/{{ event.imageName }}">
    </ng-container> -->


  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.styleBlog {

  height: 289px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #364f75;


}

.title-cat {
font-family: Merriweather;
color: #364f75;
font-weight: 700;
font-size: 17px;
}

.cat-content {
font-family: Montserrat;
color: #777;
font-weight: 100;
font-size: 16px;
}

h2 {

  font-family: Merriweather,serif;
  font-weight: 700;
  letter-spacing: -.015em;
  color: #364f75;
  font-size: 25px;
  line-height: 1.28em;

}

.description {

  font-family: Montserrat,sans-serif;
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  color: #777;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}


  `]
})
export class EventViewComponent implements OnInit {

  event: Event;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.eventService.find(+id))
      )
      .subscribe(
        (event) => {
          this.event = event;

        },
        (error) => {
          this.errorMessage = "L'article demandé n'existe pas";
        }
      );
  }

}
