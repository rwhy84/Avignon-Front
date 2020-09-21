import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventService } from './event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { event } from './event';


@Component({
  selector: 'app-event-edit',
  template: `

<div class="container-fluid">
<div class="row">
<form  (ngSubmit)="handleSubmit()" [formGroup]="form">
     <div class="form-group">
     <label for="">Le nom de votre établissement</label>
     <input type="text" formControlName="name" class="form-control" placeholder="Nom de l'évènement">
     </div>
     <div class="form-group">
     <label for="">La description de votre établissement</label>
     <input type="text" formControlName="description" class="form-control" placeholder="Description">
     </div>
     <div class="form-group">
     <label for="">Votre image de couverture</label>
     <input type="text" formControlName="coverImage" class="form-control" placeholder="Image de couverture">
     </div>
     <div class="form-group">
     <label for="">Date de début</label>
     <input type="datetime-local" formControlName="startEvent" class="form-control" placeholder="Image de couverture">
     <label for="">Date de fin</label>
     <input type="datetime-local" formControlName="endEvent" class="form-control" placeholder="Image de couverture">
     </div>
     <button type="submit" class="btn btn-primary btn-lg btn-block">Créer un Evenement</button>
   </form>
   </div>
  </div>
  `,
  styleUrls: []
})
export class EventEditComponent implements OnInit {

  submitted = false;

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    coverImage: new FormControl(''),
    startEvent: new FormControl(''),
    endEvent: new FormControl(''),

  });

  event: event;

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe((data) => {

      this.event = data.event;
      this.form.patchValue({
        ...this.event,
        startEvent: this.event.startEvent.substring(0, 16),
        endEvent: this.event.endEvent.substring(0, 16)
      });
    })
  }


  handleSubmit() {
    this.submitted = true;
    this.eventService.update({ ...this.form.value, id: this.event.id }).subscribe(user => {

      this.router.navigateByUrl('/home');

    }, (error: HttpErrorResponse) => {
      if (error.status === 400 && error.error.violations) {
        for (const violation of error.error.violations) {
          const nomDuChamp = violation.propertyPath;
          const message = violation.message;

          this.form.controls[nomDuChamp].setErrors({
            'invalid': message
          })
        }
      }
    })
  }

}
