import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as io from 'socket.io-client';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CLS';
  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  constructor(private sharedService : SharedService) {
    this.favIcon.href = './../assets/logo-icon.png';
  }
  ngOnInit(): void {
    this.sharedService.initializeAppLanguage();
  }
}
