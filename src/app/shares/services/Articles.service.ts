import { EventEmitter } from "@angular/core";
import { Article } from "../models/Articles.model"
import {CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { article } from 'src/app/shares/models/articleint.model';


@Injectable({
  providedIn: 'root'
  })

export class ArticleService{
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

    GET_articles(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl + 'backend/Articles/', {headers: this.getAuthHeaders()});
    }

    registerArticle(val: any){
      return this.http.post(this.APIUrl + 'backend/Articles/',val, {headers: this.getAuthHeaders()});
    }

    GET_article(id:Number){
      return this.http.get<article>(this.APIUrl + 'backend/Articles/' + id,{headers: this.getAuthHeaders()});
    }

    EDIT_article(val:any){
      return this.http.put(this.APIUrl + 'backend/Articles/',val, {headers: this.getAuthHeaders()});
    }

    EDIT_article_readOnly(val:any){
      return this.http.put(this.APIUrl + 'backend/Articles_readOnly/',val, {headers: this.getAuthHeaders()});
    }

    DELETE_article(val:any){
      return this.http.delete(this.APIUrl + 'backend/Articles/'+val, {headers: this.getAuthHeaders()});
    }

    UploadPhoto_Article(val:any){
      return this.http.post(this.APIUrl+'Articles/SaveFile', val);
    }

    GET_articlesReadOnly(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl + 'backend/Articles_readOnly/', {headers: this.getAuthHeaders()});
    }

    
    GET_articleReadOnly(id:Number){
      return this.http.get<article>(this.APIUrl + 'backend/Articles_readOnly/' + id,{headers: this.getAuthHeaders()});
    }

}