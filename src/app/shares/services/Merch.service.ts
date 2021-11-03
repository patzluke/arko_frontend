import { EventEmitter } from "@angular/core";
import { Merch } from "../models/Merch.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { merch } from 'src/app/shares/models/merchint.model';




@Injectable({
  providedIn: 'root'
  })

export class MerchService{
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

    GET_merchs(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl + 'backend/Merchandise/', {headers: this.getAuthHeaders()});
    }

    registerMerch(val: any){
      return this.http.post(this.APIUrl + 'backend/Merchandise/',val, {headers: this.getAuthHeaders()});
    }

    UploadPhoto_Merchandise(val:any){
      return this.http.post(this.APIUrl+'Merchandise/SaveFile', val);
    }


    GET_merch(id:Number){
      return this.http.get<merch>(this.APIUrl + 'backend/Merchandise/' + id, {headers: this.getAuthHeaders()});
    }

    EDIT_merch(val:any){
      return this.http.put(this.APIUrl + 'backend/Merchandise/',val, {headers: this.getAuthHeaders()});
    }

    DELETE_merch(val:any){
      return this.http.delete(this.APIUrl + 'backend/Merchandise/'+val, {headers: this.getAuthHeaders()});
    }

    GET_merchsReadOnly(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl + 'backend/Merchandise_readOnly/', {headers: this.getAuthHeaders()});
    }

    
    GET_merchReadOnly(id:Number){
      return this.http.get<merch>(this.APIUrl + 'backend/Merchandise_readOnly/' + id,{headers: this.getAuthHeaders()});
    }
}