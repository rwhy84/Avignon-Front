import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { user } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profilepro',
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
   <option value="/api/categories/16">Restaurant</option>
   <option value="/api/categories/17">Bar</option>
   <option value="/api/categories/18">Musée</option>

</select>
   </div>
   </ng-container>

   <button type="submit" class="btn btn-primary btn-lg btn-block">Modifier</button>
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
export class ProfileproComponent implements OnInit {

  submitted = false;

  form = new FormGroup({
    email: new FormControl(''),
    // password: new FormControl(''),
    etablissement: new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      adress: new FormControl(''),
      lat: new FormControl(''),
      lng: new FormControl(''),
      coverImage: new FormControl(''),
      category: new FormGroup({
        name: new FormControl('')
      })

    })
  });

  user: user;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.route.data.subscribe((data) => {

      this.user = data.user;
      this.form.patchValue(this.user);
    })

  }



  handleSubmit() {
    this.submitted = true;

const data = { ...this.user, ...this.form.value };
data.etablissement = {...this.user.etablissement, ...this.form.value.etablissement};


    this.userService.update(data).subscribe(user => {

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
