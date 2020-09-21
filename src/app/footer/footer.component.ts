import { Component, OnInit } from '@angular/core';
import { faCoffee, faAddressBook, faRetweet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faCoffee = faCoffee;
  faFacebook = faAddressBook;

  constructor() { }

  ngOnInit(): void {
  }

}
