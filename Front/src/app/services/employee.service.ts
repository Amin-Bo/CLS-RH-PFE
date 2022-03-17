import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient , private sharedService : SharedService) { }

  //read id_token from local storage
  id_token = this.sharedService.getTokenFromLocalStorage();

  // put token in header
   headers = {
    'Authorization': 'jwt ' + this.id_token
  };

  userLocal :any = this.sharedService.getUserFromLocalStorage();

  getRequests(type : string){
    return this.http.get('http://localhost:3000/api/employee/getRequest/'+type,{headers:this.headers});
  }

  getEmployeeById(){
    return this.http.get('http://localhost:3000/api/employee/getEmployeeById/'+this.userLocal._id,{headers:this.headers});
      
  }

  addRequest(data :any){
    return this.http.post('http://localhost:3000/api/employee/addRequest',data,{headers:this.headers});    
  }
}
