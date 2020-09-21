import { AfterViewInit, Component, OnInit, AfterViewChecked } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import { EtablissementService } from '../etablissement/etablissement.service';
import { Etablissement } from '../models/etablissement.model';
import { element } from 'protractor';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnInit, AfterViewChecked {
  private map: any;
  etablissement: Etablissement[] = [];

smallIcon;
bar: any;
museum: any;
restaurant: any;


// toggleDisplay() {
//   this.bar = !this.bar

// }
// toggleDisplaymuseum() {
//   this.museum = !this.museum;
//   console.log(this.museum);
// }

  constructor(private http: HttpClient, private service: EtablissementService) {

  }

  ngOnInit() {

    this.service.findAll().subscribe(res => {
      res.forEach(element => {

        console.log(element.category.name);


        var list = `<dl>
        <dt style="font-weight: bold">${element.name}</dt>
        <dd>${element.adress}</dd>
        <dd class="text-center"><img src="${element.coverImage}" alt="${element.name}" width="100%" height="50%"></dd>
        <span class="badge badge-danger">${element.category.name}</span>
    </dl>`


    if (element.category.name == 'Musée') {
      this.museum = {

      this:this.smallIcon = new L.Icon({




        iconUrl: 'assets/marker/museums.png',
        iconRetinaUrl: 'assets/marker/museums.png',
        iconSize: [31, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })

    }

    } else if (element.category.name == 'Bar') {
     this.bar= {

      this:this.smallIcon =new L.Icon({




        iconUrl: 'assets/marker/bars.png',
        iconRetinaUrl: 'assets/marker/bars.png',
        iconSize: [31, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })

    }
    } else {

      this.restaurant = {

     this:this.smallIcon = new L.Icon({




        iconUrl: 'assets/marker/restaurants.png',
        iconRetinaUrl: 'assets/marker/restaurants.png',
        iconSize: [31, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })
    }

    }



    this.addMarker(element.lat, element.lng, list)
  });

})


  }

  ngAfterViewInit(): void {

    return this.initMap();
  }

  ngAfterViewChecked() {



  }


  private initMap(): void {
    this.map = L.map('map', {
      center: [43.947736, 4.808256],
      zoom: 16

    });





    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,

    });

    tiles.addTo(this.map);
    // this.addMarker();
  }

  addMarker(lat, lng, list) {


    const marker = L.marker([lat, lng], { icon: this.smallIcon });
    marker.addTo(this.map).bindPopup(list)
  }

  ;




}
