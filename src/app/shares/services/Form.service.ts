import { EventEmitter } from "@angular/core";
import { Merch } from "../models/Merch.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { applicant } from 'src/app/shares/models/applicant.mode';
import { order } from 'src/app/shares/models/merchOrder.model';


@Injectable({
  providedIn: 'root'
  })

export class FormService{
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

    getAuthHeaders(){
      const token = this.cookieService.get('mr-token');
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      });
    }

    registerMember(val: any){
        return this.http.post(this.APIUrl + 'backend/Member/',val, {headers: this.getAuthHeaders()});
      }
    
    GET_members(): Observable<any[]> {
        return this.http.get<any[]>(this.APIUrl + 'backend/Member/', {headers: this.getAuthHeaders()});
      }
    
    GET_member(id:Number){
        return this.http.get<applicant>(this.APIUrl + 'backend/Member/' + id, {headers: this.getAuthHeaders()});
      }
    DELETE_member(val:any){
        return this.http.delete(this.APIUrl + 'backend/Member/'+val, {headers: this.getAuthHeaders()});
      }
    registerOrder(val: any){
        return this.http.post(this.APIUrl + 'backend/MerchItems/',val, {headers: this.getAuthHeaders()});
      }
    GET_Orders(): Observable<any[]> {

        return this.http.get<any[]>(this.APIUrl + 'backend/MerchItems/', {headers: this.getAuthHeaders()});
      }
    GET_Order(id:Number){
        return this.http.get<order>(this.APIUrl + 'backend/MerchItems/' + id, {headers: this.getAuthHeaders()});
      }
    DELETE_Order(val:any){
        return this.http.delete(this.APIUrl + 'backend/MerchItems/'+val, {headers: this.getAuthHeaders()});
      }
    
      
}