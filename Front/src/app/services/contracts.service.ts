import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http:HttpClient) { }

  getAllContracts (){
    return this.http.get('http://localhost:3000/api/contract/getAllContracts');
  }
}