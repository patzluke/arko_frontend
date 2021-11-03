import { EventEmitter } from "@angular/core";
import { Merch } from "../models/Merch.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { eventint } from 'src/app/shares/models/eventsint.model';




@Injectable({
  providedIn: 'root'
  })

export class EventService{
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

    GET_events(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl + 'backend/Event/', {headers: this.getAuthHeaders()});
    }

    registerEvent(val: any){
      return this.http.post(this.APIUrl + 'backend/Event/',val, {headers: this.getAuthHeaders()});
    }

    UploadPhoto_Event(val:any){
      return this.http.post(this.APIUrl+'Event/SaveFile', val);
    }


    GET_event(id:Number){
      return this.http.get<eventint>(this.APIUrl + 'backend/Event/' + id, {headers: this.getAuthHeaders()});
    }

    EDIT_event(val:any){
      return this.http.put(this.APIUrl + 'backend/Event/',val, {headers: this.getAuthHeaders()});
    }

    DELETE_event(val:any){
      return this.http.delete(this.APIUrl + 'backend/Event/'+val, {headers: this.getAuthHeaders()});
    }
    GET_eventsReadOnly(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl + 'backend/Event_readOnly/', {headers: this.getAuthHeaders()});
    }

    
    GET_eventReadOnly(id:Number){
      return this.http.get<eventint>(this.APIUrl + 'backend/Event_readOnly/' + id,{headers: this.getAuthHeaders()});
    }
}