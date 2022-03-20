import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestsService } from 'src/app/services/requests.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit,OnDestroy {
  firstName : String;
  lastName : String;
  notification : string;
  private subsription_notification : Subscription; 
  constructor( private router:Router, private sharedService : SharedService, private requestService : RequestsService) { }

  ngOnInit(): void {
    let user :any = this.sharedService.getUserFromLocalStorage();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.requestService.getRequestsNotifications();
    this.subsription_notification= this.requestService.notificationUpdateListener().subscribe( (data : any) => {      
      this.notification = data;      
    });
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnDestroy(){
    this.subsription_notification.unsubscribe();
  }
}
