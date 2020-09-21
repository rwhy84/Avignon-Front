import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `


  <div class="container-fluid">
<div class="row" style="height: 100%; width: 100wh">
    <div class="col-md-6 col-xs-12 pl-0 pr-0"><video style="object-fit: fill" muted loop autoplay width=100%  height=100% poster="../../assets/image/avignon-palais.png">
  <source src="exemple.webm" type="video/webm">
  <source src="exemple.ogg"  type="video/ogg">
  <source src="../../assets/video/avignon.mp4" type="video/mp4">
</video></div>
    <div class="col-md-6 col-xs-12">
        <div class="row p-0" style="height: 80vh;">
          <div class="col d-flex justify-content-center align-items-center papal" style="width: 100%; background-color: #364F75; height: 50%">
          <p class="text-center" style="font-family: 'Caveat'; color: white; font-size: 2em">La cité des papes
          <br> vous attend !</p>
          </div>
            <div class="col-md-6 col-xs-12 d-flex align-items-start justify-content-center align-items-center" id="instagram" style="background-color: #5FB1D1;"><section>
    <h2 class="text-left" style="font-family: Caveat; color: white;">Les derniers évènements !</h2>
    <h3 class="text-left" style="font-family: Montserrat; font-weight: bold; color: white;">Sortez !</h3>
    <p class="text-left" style="font-family: Montserrat; color: white;">Découvrez les derniers évènements !</p>
    <section class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center" style="margin-top: 60px;"><a class="btn btn-primary d-xl-flex" type="button" style="background-color: rgba(0,123,255,0);filter: blur(0px);border: 1px solid white;border-radius: 2em;" routerLink="/event">Voir les évènements</a></section>



</section></div>
            <div class="col-md-6 col-xs-12 d-flex align-items-start justify-content-center align-items-center" style="background-color: #65C9BB; height: 50%;"><section>
    <h2 class="text-left" style="font-family: Caveat; color: white;">Nouveauté</h2>
    <h3 class="text-left" style="font-family: Montserrat; font-weight: bold; color: white;">La vie en Avignon</h3>
    <p class="text-left" style="font-family: Montserrat; color: white;">Découvrez les dernieres actualités de votre ville</p>
    <section class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center" style="margin-top: 60px;"><a class="btn btn-primary d-xl-flex" type="button" style="background-color: rgba(0,123,255,0);filter: blur(0px);border: 1px solid white;border-radius: 2em;" routerLink="/blog">Voir les actualités</a></section>



</section></div>
            <div class="col-md-6 col-xs-12" id="glace" style="background-color: #364F75"></div>
        </div>
    </div>
</div>
</div>

  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
