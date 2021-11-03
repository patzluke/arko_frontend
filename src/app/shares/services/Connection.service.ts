import {CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class ConnectionService {

  @Injectable({
    providedIn: 'root'
  })

  APIUrl = "https://uapsaust.com/api/";
readonly PhotoUrl = "https://uapsaust.com/media/";
  //APIUrl = "http://127.0.0.1:8000/api/";
  //readonly PhotoUrl = "http://127.0.0.1:8000/media/";
    token = this.cookieService.get('mr-token');
    headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: "Token" + this.token
    });

    constructor(private http:HttpClient,
        private cookieService: CookieService){

    }

    userLogin(authData: any){
        const body = JSON.stringify(authData);
        return this.http.post(this.APIUrl + "Accounts/auth/", body, {headers: this.headers});
    }

    registerUser(authData: any){
        const body = JSON.stringify(authData);
        return this.http.post(this.APIUrl + 'Accounts/users/' , body, {headers: this.headers});
      }

      getAuthHeaders(){
        const token = this.cookieService.get('mr-token');
        return new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`
        });
    
      }
    }
  