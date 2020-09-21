import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UiService } from '../ui/ui.service';

@Component({
  selector: 'app-login-user',
  template: `
  <div class="container row mx-auto text-center d-flex align-items-center" style="height: 61vh">


  <form method="post" class="form-signin" (ngSubmit)="handleSubmit()" [formGroup]="form">

    <h3 class="pb-3">Avignon Life</h3>
    <h1 class="h3 mb-3 font-weight-normal">Connexion à votre compte</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" name="email" id="inputEmail" class="form-control" formControlName="email" required autofocus placeholder="Votre email de connexion">
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" name="password" id="inputPassword" class="form-control" formControlName="password" required placeholder="Votre de mot de passe">



    <button class="btn btn-lg btn-primary btn-block" type="submit">Connexion</button>
</form>
</div>








<!-- <h1>Connexion</h1>


  <form [formGroup]="form" (ngSubmit)="handleSubmit()">

  <div class="form-group">
  <input type="email" class="form-control" formControlName="email" >
  </div>
  <div class="form-group">
  <input type="password" class="form-control" formControlName="password" >

  </div>


  <button type="submit">Connexions</button>



  </form> -->



  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');


h3 {

    font-family: Caveat;
    font-size: 3em;
    font-weight: bold;
    color: red;
}


.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}

body {



    height: 100vh;

    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;

}

.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}


  `]
})
export class LoginUserComponent implements OnInit {

  submitted = false;
  error = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private auth: AuthService, private router: Router, private ui: UiService) { }

  ngOnInit(): void {

  }
  handleSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


    this.auth.authenticate(this.form.value).subscribe(data => {
      this.error = false;
      this.router.navigateByUrl('/home');
    }, (error) => {
      this.error = true;
    })
  }

}
