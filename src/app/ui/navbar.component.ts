import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { faCoffee, faAddressBook, faRetweet, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  template: `
<!--Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: rgb(241,91,67)">
  <a class="navbar-brand" style="font-family: Caveat; font-weight: 300; font-size: 2em; line-height: 0.8em" href="#">Avignon <br>Life</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" routerLink="/home">Accueil
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/etablissement">Etablissements</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/event">Evenements</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/blog">Actualités</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/map">Carte intéractive</a>
      </li>

    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <ng-container *ngIf="!isAuthenticated">
          <li class="nav-item">
            <a routerLink="/register/choice" class="nav-link">Inscription</a>
          </li>
          <li class="nav-item">
            <a routerLink="/login" class="nav-link">Connexion</a>
          </li>
          </ng-container>

          <li class="nav-item dropdown no-arrow" role="presentation" *ngIf="isAuthenticated">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link"
                                        data-toggle="dropdown" aria-expanded="false" href="#">Votre Compte<span
                                            class="d-none d-lg-inline mr-2 nav-link "></span>
                                            <i class="fas fa-user  text-gray-300 d-none d-sm-inline "></i></a>
                                    <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu">
                                    <a routerLink="event/create" class="dropdown-item" role="presentation"
                                            href=""><i
                                                class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Créer un évènèment</a>


                                        <div class="dropdown-divider"></div><a routerLink="profile/edit/{{ auth.user.id }}" class="dropdown-item" role="presentation"
                                            href=""><i
                                                class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Editer mon profil</a>
                                        <a (click)="handleLogout()" class="dropdown-item" role="presentation"
                                            href=""><i
                                                class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Deconnexion</a>
                                    </div>
                                </div>
                            </li>







          <!-- <li class="nav-item" *ngIf="isAuthenticated">
          <a  (click)="handleLogout()" class="nav-link waves-effect waves-light">Deconnexion
          <i class="fas fa-sign-out-alt" style="font-weight: 2em"></i>
        </a>
            </li>
            <li class="nav-item" *ngIf="isAuthenticated">
          <a routerLink="profile/edit/{{ auth.user.id }}"   class="nav-link waves-effect waves-light">Editer Mon profile
          <i class="fas fa-sign-out-alt" style="font-weight: 2em"></i>
        </a>
            </li> -->
    </ul>
  </div>
</nav>

  `,
  styles: [`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  .nav-link {
    font-family: Montserrat;
  }

  `],
})
export class NavbarComponent implements OnInit {

  faCoffee = faUser;
  faLog = faSignOutAlt;
  isAuthenticated = false;





  constructor(public auth: AuthService, private router: Router) { }





  ngOnInit(): void {

    this.isAuthenticated = this.auth.isAuthenticated();



    this.auth.authChanged.subscribe((value) => {


      if (!value && this.isAuthenticated) {
        this.router.navigateByUrl('login');
      }

      this.isAuthenticated = value;

      // const tokenInfo = this.auth.getDecodedAccessToken(this.auth.getToken())
      // let tokenId = tokenInfo.id;


    }
    )
  }



  handleLogout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
