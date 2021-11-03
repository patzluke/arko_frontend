
import { regFormint } from '../models/regForm.mode';
import {CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Teams } from 'src/app/shares/models/Teams.model';
import { registrantint } from '../models/registrantint.mode';


@Injectable({
  providedIn: 'root'
  })
  

export class TeamsService{

 

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

  GET_Teams(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'backend/TeamMembers/', {headers: this.getAuthHeaders()});
  }
  GET_Team(id: Number){
    return this.http.get<Teams>(this.APIUrl + 'backend/TeamMembers/' + id, {headers: this.getAuthHeaders()});
  }

  registerTeam(val: any){
    return this.http.post(this.APIUrl + 'backend/TeamMembers/',val, {headers: this.getAuthHeaders()});
  }

  EDIT_Team(val:any){
    return this.http.put(this.APIUrl + 'backend/TeamMembers/',val, {headers: this.getAuthHeaders()});
  }

  DELETE_Team(val:any){
    return this.http.delete(this.APIUrl + 'backend/TeamMembers/'+val, {headers: this.getAuthHeaders()});
  }


  GET_TeamsReadOnly(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'backend/TeamMembers_readOnly/', {headers: this.getAuthHeaders()});
  }

  UploadPhoto_Event(val:any){
    return this.http.post(this.APIUrl+'TeamMembers/SaveFile', val);
  }


}

  
 

