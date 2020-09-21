import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register-user',
  template: `

  <div class="container-fluid p-0">

  <div class="register-photo">
    <div class="form-container">
        <div class="image-holder"></div>
        <form (ngSubmit)="handleSubmit()" [formGroup]="form">
            <h2 class="text-center"><strong>Créer</strong> un compte</h2>
            <div class="form-group">
    <input [class.is-invalid]="getErrorforControl('email')" type="text" formControlName="email" class="form-control" placeholder="Votre email">
    <p class="invalid-feedback" *ngIf="getErrorforControl('email')">
          {{ getErrorforControl('email') }}
        </p>
    </div>
    <div class="form-group">
    <input [class.is-invalid]="getErrorforControl('password')" type="password" formControlName="password" class="form-control" placeholder="Votre mot de passe">
    <p class="invalid-feedback" *ngIf="getErrorforControl('password')">
          {{ getErrorforControl('password') }}
        </p>
    </div>
    <div class="form-group">
        <input
        [class.is-invalid]="submitted && form.controls['confirmation'].invalid"
          [class.is-invalid]="getErrorforControl('confirmation')"
          formControlName="confirmation"
          type="password"
          class="form-control"
          placeholder="Repetez votre mot de passe"
        />
        <p class="invalid-feedback" *ngIf="getErrorforControl('confirmation')">
          {{ getErrorforControl('confirmation') }}
        </p>
      </div>
            <div class="form-group">
                <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" />J'accepte les termes.</label></div>
            </div>
            <div class="form-group"><button class="btn btn-primary btn-block" type="submit">S'enregistrer</button>
          </div>
          <!-- <a class="already" href="#">You already have an account? Login here.</a> -->
          </form>
    </div>
</div>


  </div>
  <!-- <h1>Inscription</h1>

  <form  (ngSubmit)="handleSubmit()" [formGroup]="form">
    <div class="form-group">
    <input type="text" formControlName="email" class="form-control" placeholder="Votre email">
    <p class="invalid-feedback" *ngIf="getErrorforControl('email')">
          {{ getErrorforControl('email') }}
        </p>
    </div>
    <div class="form-group">
    <input type="password" formControlName="password" class="form-control" placeholder="Votre password">
    <p class="invalid-feedback" *ngIf="getErrorforControl('password')">
          {{ getErrorforControl('password') }}
        </p>
    </div>
    <div class="form-group">
        <input
          [class.is-invalid]="getErrorforControl('confirmation')"
          formControlName="confirmation"
          type="password"
          class="form-control"
          placeholder="Repetez votre mot de passe"
        />
        <p class="invalid-feedback" *ngIf="getErrorforControl('confirmation')">
          {{ getErrorforControl('confirmation') }}
        </p>
      </div>

    <button type="submit">S'enregistrer</button>
  </form> -->
  `,
  styles: [`

  .register-photo {
  background: #f1f7fc;
  padding: 80px 0;
}

.register-photo .image-holder {
  display: table-cell;
  width: auto;
  background: url(assets/image/meeting.jpg);
  background-size: cover;
}

.register-photo .form-container {
  display: table;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
}

.register-photo form {
  display: table-cell;
  width: 400px;
  background-color: #ffffff;
  padding: 40px 60px;
  color: #505e6c;
}

@media (max-width:991px) {
  .register-photo form {
    padding: 40px;
  }
}

.register-photo form h2 {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.register-photo form .form-control {
  background: #f7f9fc;
  border: none;
  border-bottom: 1px solid #dfe7f1;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
  text-indent: 6px;
  height: 40px;
}

.register-photo form .form-check {
  font-size: 13px;
  line-height: 20px;
}

.register-photo form .btn-primary {
  background: #f4476b;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 35px;
  text-shadow: none;
  outline: none !important;
}

.register-photo form .btn-primary:hover, .register-photo form .btn-primary:active {
  background: #eb3b60;
}

.register-photo form .btn-primary:active {
  transform: translateY(1px);
}

.register-photo form .already {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

  `]
})
export class RegisterUserComponent implements OnInit {
  submitted = false;

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmation: new FormControl('')
  });


  error = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {

    this.userService.create(this.form.value).subscribe(user => {
      this.submitted = true;
      Swal.fire({
        title: 'Félicitation!',
        text: 'Votre compte à été créé !',
        icon: 'success',
        confirmButtonText: "Merci !"
      })

      this.router.navigateByUrl('/home');
    }, (error: HttpErrorResponse) => {
      if (error.status === 400 && error.error.violations) {
        Swal.fire({
          title: 'Oups!',
          text: 'Un problème a été détecté ! Merci de vérifié vos données !',
          icon: 'error',
          confirmButtonText: "J'ai compris !"
        })
        for (const violation of error.error.violations) {
          const fieldName = violation.propertyPath;
          const message = violation.message;

          this.form.controls[fieldName].setErrors({
            'invalid': message,
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
