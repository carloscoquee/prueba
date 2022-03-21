import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { faB, faCode, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faFacebook, faGooglePlus, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faFacebook = faFacebook
  twitter = faTwitter
  google = faGooglePlus
  instagram = faInstagram
  youtube = faYoutube
  html = faCode
  bootstrap = faB
  css = faCss3

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
