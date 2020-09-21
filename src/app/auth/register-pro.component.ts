import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AsyncSubject, Subject } from 'rxjs';
import { UserService } from './user.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-register-pro',
  template: `
    <div class="container-fluid">
<div class="row">
    <div class="col-md-6 d-none d-sm-block " id="userRegister" style="height: 100vh;"></div>
    <div class="col-md-6 py-2 px-5" id="proRegister" style="height: 100%;">

   <form  (ngSubmit)="handleSubmit()" [formGroup]="form">
     <div class="form-group">
       <label for="">Votre Email de connexion</label>
     <input type="text" formControlName="email" class="form-control" placeholder="Votre email" aria-label="Username" aria-describedby="basic-addon1">
     </div>
     <div class="form-group">
     <label for="">Votre mot de passe</label>
     <input type="password" formControlName="password" class="form-control" placeholder="Password">
     </div>
     <ng-container formGroupName="etablissement">
     <div class="form-group">
     <label for="">Le nom de votre établissement</label>
     <input type="text" formControlName="name" class="form-control" placeholder="Nom de l'établissement">
     </div>
     <div class="form-group">
     <label for="">La description de votre établissement</label>
     <editor apiKey="ceemf7v3nomo2vg9zxrgh9hh4zhm983pbdu5bbma1jzf9n76" formControlName="description"
   [init]="{
     height: 250,
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
     <!-- <input type="text" formControlName="description" class="form-control" placeholder="Description"> -->
     </div>
     <app-adress-search [parentForm]="form.controls['etablissement']"></app-adress-search>
     <div class="form-group">
     <label for="">Votre image de couverture</label>
     <input type="text" formControlName="coverImage" class="form-control" placeholder="Image de couverture">
     </div>
     <div class="form-group">
     <label for="">Catégorie</label>
     <select id="category-select" class="form-control" formControlName="category">
     <option value="">--Please choose an option--</option>
     <option value="/api/categories/19">Restaurant</option>
     <option value="/api/categories/20">Bar</option>
     <option value="/api/categories/21">Musée</option>

 </select>
     </div>
     </ng-container>

     <button type="submit" class="btn btn-primary btn-lg btn-block">Créer un compte pro</button>
   </form>
   </div>
  </div>
</div>


  `,
  styles: [
    '#userRegister{ background-image: url(../../assets/image/avignon.jpg); background-position: center;}',
    '#proRegister{ background-color: #0000}'
  ]

})
export class RegisterProComponent implements OnInit {
  private editorSubject: Subject<any> = new AsyncSubject();


  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    etablissement: new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      adress: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
      coverImage: new FormControl(''),
      category: new FormControl('')

    })
  });

  submitted = false;

  error = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {


  }


  handleSubmit() {
    this.userService.create(this.form.value).subscribe(user => {
      this.error = false;
      Swal.fire({
        title: 'Félicitation!',
        text: 'Votre compte professionnel à été créé !',
        icon: 'success',
        confirmButtonText: "Merci !"
      })
      this.router.navigateByUrl('/login');
    }, (error: HttpErrorResponse) => {
      if (error.status === 400 && error.error.violations) {
        for (const violation of error.error.violations) {
          const fieldName = violation.propertyPath;
          const message = violation.message;



          this.form.controls[fieldName].setErrors({
            invalid: message,
          });
        }
        Swal.fire({
          title: 'Oups!',
          text: 'Un problème a été détecté ! Merci de vérifié vos données !',
          icon: 'error',
          confirmButtonText: "J'ai compris !"
        })
      }
      return;
    })
    this.error = true;
  }

  getErrorforControl(controlName: string) {
    return this.form.controls[controlName].getError('invalid');
  }

}
