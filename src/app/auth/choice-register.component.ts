import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice-register',
  template: `
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-12 col-lg-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center"
            style="height: 100vh;background-color: #65c9bb;">
            <section class="text-left">
                <h2 class="text-center" style="margin-bottom: 100px;color: rgb(255,255,255); font-weight: bold">Vous êtes un professionnel:</h2>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Ajouter votre entreprise et soyez vu aux yeux de tous.</p>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Apparaissez sur la carte intéractive.</p>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Les visiteurs peuvent vous contacter directement.</p>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Et bien plus encore...</p>
                <section class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center" style="margin-top: 60px;"><a class="btn btn-primary d-xl-flex" type="button" style="background-color: rgba(0,123,255,0);filter: blur(0px);border: 1px solid white;border-radius: 2em;" routerLink="/register/pro">Cliquez ici</a></section>
            </section>
        </div>
        <div class="col-sm-12 col-lg-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center"
            style="height: 100vh;background-color: #5fb1d1;">
            <section class="text-left">
                <h2 class="text-center" style="margin-bottom: 100px;color: rgb(255,255,255); font-weight: bold">Vous êtes un particulier:</h2>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Ajouter votre entreprise et soyez vu aux yeux de tous.</p>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Apparaissez sur la carte intéractive.</p>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Les visiteurs peuvent vous contacter directement.</p>
                <p style="color: rgb(255,255,255); font-family: Montserrat;">- Et bien plus encore...</p>
                <section class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center" style="margin-top: 60px;"><a class="btn btn-primary d-xl-flex" type="button" style="background-color: rgba(0,123,255,0);filter: blur(0px);border: 1px solid white;border-radius: 2em;" routerLink="/register">Cliquez ici</a></section>
            </section>
        </div>
    </div>
</div>

  `,
  styles: [
    '#userRegister{ background-color: #65C9BB}',
    '#proRegister{ background-color: #5FB1D1}'


  ]
})
export class ChoiceRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
