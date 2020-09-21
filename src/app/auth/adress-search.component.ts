import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import places from "places.js";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adress-search',
  template: `
<!-- <input type="search" #addressinput placeholder="Where are we going?" /> -->


<form class="form" [formGroup]="parentForm">
  <div class="form-group">
    <label for="form-address">Votre adresse professionnelle</label>
    <input type="search" class="form-control" formControlName="adress" #addressinput placeholder="Votre adresse professionnelle" />
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <input type="text" class="form-control" formControlName="lat" #addressinput2 placeholder="Latitude" disabled/>
  </div>
  <div class="form-group col-md-6">
    <input type="text" class="form-control" formControlName="lng" #city placeholder="Longitude"disabled>
  </div>
  </div>
</form>

  `,
  styleUrls: []
})
export class AdressSearchComponent implements OnInit, AfterViewInit {

  @Input()
  parentForm: FormGroup;

  // form = new FormGroup({
  //   adress: new FormControl(''),
  //   lat: new FormControl(''),
  //   lng: new FormControl('')
  // });


  @ViewChild('addressinput')
  addressinput: ElementRef;
  // addressinput2: ElementRef;
  // city: ElementRef;
  // zipcode: ElementRef;
  // templates: [];

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {


    const reconfigurableOptions = {
      language: 'fr', // Receives results in German
      countries: ['fr'], // Search in the United States of America and in the Russian Federation
      aroundLatLngViaIP: false,
      // disable the extra search/boost around the source IP

    };

    var placesAutocomplete = places({
      appId: environment.algolia.appId,
      apiKey: environment.algolia.apiKey,
      container: this.addressinput.nativeElement,
      language: reconfigurableOptions.language,
      countries: reconfigurableOptions.countries,
      // templates: {
      //   value: function (suggestion) {
      //     return suggestion.name;
      //   }
      // },

    }).configure({
      type: 'address',

    });
    placesAutocomplete.on('change', (e) => {

      const toto = {
        adress: e.suggestion.value,
        lat: e.suggestion.latlng.lat,
        lng: e.suggestion.latlng.lng,
        city: e.suggestion.city
      };

      this.parentForm.patchValue(toto);

    });








  }

}
