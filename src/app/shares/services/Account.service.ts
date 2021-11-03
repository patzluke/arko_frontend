import { EventEmitter } from "@angular/core";
import { Useraccount } from "../models/UserAccount.model";
import {CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { user } from 'src/app/shares/models/userint.model';





@Injectable({
  providedIn: 'root'
  })
  

export class AccountService{
  accountlist = new EventEmitter<Useraccount[]>();
 

  constructor(private http:HttpClient,
    private cookieService: CookieService){

}
APIUrl = "https://uapsaust.com/api/";
readonly PhotoUrl = "https://uapsaust.com/media/";
//APIUrl = "http://127.0.0.1:8000/api/";
//readonly PhotoUrl = "http://127.0.0.1:8000/media/";
  token = this.cookieService.get('mr-token');
  headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: "Token" + this.token
  });

  userLogin(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(this.APIUrl + "Accounts/auth/", body, {headers: this.headers});
}

  registerUser(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(this.APIUrl + 'Accounts/users/', body, {headers: this.getAuthHeaders()});
  }

  getAuthHeaders(){
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });

  }

  GET_account(id:Number){
    return this.http.get<user>(this.APIUrl + 'Accounts/users/' + id, {headers: this.getAuthHeaders()});
    
  }

  GET_accounts(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Accounts/users/', {headers: this.getAuthHeaders()});
  }

  EDIT_accounts(val:any){
    return this.http.put(this.APIUrl + 'Accounts/users/',val,{headers: this.getAuthHeaders()});
  }

  DELETE_accounts(val:any){
    return this.http.delete(this.APIUrl + 'Accounts/users/'+val,{headers: this.getAuthHeaders()});
  }

  UploadPhoto_Account(val:any){
    return this.http.post(this.APIUrl+'Accounts/SaveFile', val);
  }
}

  
 

