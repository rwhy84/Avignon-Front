import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { EtablissementService } from './etablissement.service';
import { Etablissement } from '../models/etablissement.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-etablissement',
  template: `
<div class="styleBlog">
  <div class="d-flex justify-content-center align-items-center" style="height: inherit;min-height: initial;width: 100%;position: absolute;left: 0;background-color: rgba(30,41,99,0.23);">
      <div class="d-flex align-items-center order-12" style="height:200px;">
          <div class="container">
              <h1 class="text-center" style="color: rgb(242,245,248);font-size: 45px;font-weight: bold;font-family: Roboto, sans-serif;">{{ etablissement.name }}</h1>

          </div>
      </div>
  </div>
</div>


<div class="container pt-5" *ngIf="etablissement">
    <div class="row">
        <div class="col-sm-12 col-lg-9">

            <h2>{{ etablissement.name }}</h2>
            <p class="description" [innerHTML]="etablissement.description"><br /><br /><br /><br /><br /><br
                /><br /></p>
        </div>
        <div class="col-sm-12 col-lg-3 d-lg-flex flex-column">
            <h5 class="title-cat">Categorie: <span class="cat-content">{{ etablissement.category.name }}</span></h5>
            <h5 class="title-cat">Adresse: <span class="cat-content">{{ etablissement.adress }}</span></h5>


        </div>
    </div>
</div>

<div class="col text-center pb-3" style="padding: 15;"><img class="img-fluid" src="{{ etablissement.coverImage }}" /></div>




  <!-- <ng-container *ngIf="etablissement">
    <p>{{ etablissement.id }}</p>
    <p>{{ etablissement.name }}</p>
    <p>{{ etablissement.description }}</p>
    <p>{{ etablissement.adress }}</p>
    <p>{{ etablissement.lat }}</p>
    <p>{{ etablissement.lng }}</p>
    <p>{{ etablissement.category.name }}</p>


    <img src="{{ etablissement.coverImage }}">
    </ng-container> -->
  `,
  styleUrls: ['./etablissement.component.scss']
})
export class EtablissementComponent implements OnInit {

  etablissement: Etablissement;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private etablissementService: EtablissementService,
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => this.etablissementService.find(id))
      )
      .subscribe(
        (etablissement) => {
          this.etablissement = etablissement;

        },
        (error) => {
          this.errorMessage = "L'article demandé n'existe pas";
        }
      );
  }

  backClicked() {
    this._location.back();
  }

}
