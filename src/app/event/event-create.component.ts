import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncSubject, Subject } from 'rxjs';
import { EventService } from './event.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-event-create',
  template: `


<div class="container-fluid ">
    <div class="row" >

      <div class="col d-lg-flex justify-content-lg-center align-items-lg-center" style="background-color: #65c9bb; width: 90%; ">
        <section class="">
          <h1 class="text-center pb-5 pt-5" style="font-family: Montserrat; color: white;">Créer un évènement</h1>

            <form  (ngSubmit)="handleSubmit()" [formGroup]="form">
     <div class="form-group">
     <label style="font-family: Montserrat; color: white;" for="">Le nom de votre évènement</label>
     <input type="text" formControlName="name" class="form-control" placeholder="Nom de l'évènement">
     </div>
     <div class="form-group">
     <label style="font-family: Montserrat; color: white;" for="">La description de votre évènement</label>
     <!-- <input type="text" formControlName="description" class="form-control" placeholder="Description"> -->
     <editor apiKey="ceemf7v3nomo2vg9zxrgh9hh4zhm983pbdu5bbma1jzf9n76" formControlName="description"
   [init]="{
     height: 400,
     menubar: false,
     plugins: [
       'advlist autolink lists link image charmap print preview anchor',
       'searchreplace visualblocks code fullscreen',
       'insertdatetime media table paste code help wordcount'
     ],
     toolbar:
       'undo redo | formatselect | bold italic backcolor | \
       alignleft aligncenter alignright alignjustify | \
       bullist numlist outdent indent | removeformat | help'
   }"
 ></editor>
     </div>
     <div class="form-group">
     <label style="font-family: Montserrat; color: white;" for="">Votre image de couverture</label>
     <input type="text" formControlName="coverImage" class="form-control" placeholder="Image de couverture">
     </div>
     <div class="form-group">
     <label style="font-family: Montserrat; color: white;" for="">Date de début</label>
     <input type="datetime-local" formControlName="startEvent" class="form-control" placeholder="Image de couverture">
     <label style="font-family: Montserrat; color: white;" for="">Date de fin</label>
     <input type="datetime-local" formControlName="endEvent" class="form-control" placeholder="Image de couverture">
     </div>
     <section class=" pb-5 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center" style="margin-top: 60px;"><button type="submit" class="btn btn-primary btn-lg btn-block" style="background-color: rgba(0,123,255,0);filter: blur(0px);border: 1px solid white;border-radius: 2em;"
 >Créer un Evenement</button></section>

   </form>
            </section>
        </div>
    </div>
</div>







  `,
  styleUrls: []
})
export class EventCreateComponent implements OnInit {
  // private editorSubject: Subject<any> = new AsyncSubject();

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    coverImage: new FormControl(''),
    startEvent: new FormControl(''),
    endEvent: new FormControl(''),

  });



  submitted = false;

  error = false;

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  handleSubmit() {
    this.eventService.create(this.form.value).subscribe(event => {
      Swal.fire({
        title: 'Félicitations!',
        text: 'Votre évènement à été créé !',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

      this.error = false;
      this.router.navigateByUrl('/event');
    }, (error: HttpErrorResponse) => {
      Swal.fire({
        title: 'Oups!',
        text: 'un problème a été détecté ! !',
        icon: 'error',
        confirmButtonText: "J'ai compris"
      })
      if (error.status === 400 && error.error.violations) {
        for (const violation of error.error.violations) {
          const fieldName = violation.propertyPath;
          const message = violation.message;

          this.form.controls[fieldName].setErrors({
            invalid: message,
          });
        }
      }
      return;
    })
    this.error = true;
  }

  getErrorforControl(controlName: string) {
    return this.form.controls[controlName].getError('invalid');
  }


}
