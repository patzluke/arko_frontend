
import { regFormint } from '../models/regForm.mode';
import {CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { showroom } from 'src/app/shares/models/showroomint.model';
import { registrantint } from '../models/registrantint.mode';


@Injectable({
  providedIn: 'root'
  })
  

export class ShowroomService{

 

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

  
  registerShowroom(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(this.APIUrl + 'Accounts/send_email/', body, {headers: this.headers});
  }

  regLogin(authData: any){
    const body = JSON.stringify(authData);
    return this.http.post(this.APIUrl + 'Accounts/auth/', body, {headers: this.headers});
}

getAuthHeaders(){
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });

  }

  GET_registrant(id:number){
    return this.http.get<registrantint>(this.APIUrl + 'Accounts/showroom-registrants/' + id, {headers: this.getAuthHeaders()});
  }

  GET_registrants(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Accounts/showroom-registrants/', {headers: this.getAuthHeaders()});
  }
  

  GET_registrantslist(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Accounts/showroom-registrants/', {headers: this.getAuthHeaders()});
  }

  DELETE_registrants(val:any){
    return this.http.delete(this.APIUrl + 'Accounts/showroom-registrants/'+ val, {headers: this.getAuthHeaders()});
  }

  addShowroom(val: any){
    return this.http.post(this.APIUrl + 'backend/Showroom/',val, {headers: this.getAuthHeaders()});
  }

  UploadPhoto_Showroom(val:any){
    return this.http.post(this.APIUrl+'Showroom/SaveFile', val);
  }

  GET_showrooms(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'backend/Showroom/', {headers: this.getAuthHeaders()});
  }

  GET_showroom(id:Number){
    return this.http.get<showroom>(this.APIUrl + 'backend/Showroom/' + id, {headers: this.getAuthHeaders()});
  }

  EDIT_showroom(val:any){
    return this.http.put(this.APIUrl + 'backend/Showroom/',val, {headers: this.getAuthHeaders()});
  }

  DELETE_showroom(val:any){
    return this.http.delete(this.APIUrl + 'backend/Showroom/'+ val, {headers: this.getAuthHeaders()});
  }
  GET_showroomsReadOnly(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'backend/Showroom_readOnly/', {headers: this.getAuthHeaders()});
  }

  GET_showroomlist(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Accounts/Showroom/', {headers: this.getAuthHeaders()});
  }
  
  GET_showroomReadOnly(id:Number){
    return this.http.get<showroom>(this.APIUrl + 'backend/Showroom_readOnly/' + id,{headers: this.getAuthHeaders()});
  }

  EDIT_showroom_readOnly(val:any){
    return this.http.put(this.APIUrl + 'backend/Showroom_readOnly/',val, {headers: this.getAuthHeaders()});
  }

}

  
 

