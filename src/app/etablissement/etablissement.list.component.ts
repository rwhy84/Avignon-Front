import { Component, OnInit } from '@angular/core';
import { EtablissementService } from './etablissement.service';
import { Event } from '../models/event.model';
import { Etablissement } from '../models/etablissement.model';

@Component({
  selector: 'app-event',
  templateUrl: './etablissement.list.component.html',
  styleUrls: []
})
export class EtablissementListComponent implements OnInit {

  etablissement: Etablissement[] = [];



  constructor(protected service: EtablissementService) { }

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe((etablissement) => (this.etablissement = etablissement));


  }



}
