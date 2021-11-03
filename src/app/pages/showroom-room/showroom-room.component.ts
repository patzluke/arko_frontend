import { Component, OnInit } from '@angular/core';
import {  Viewer, MarkersPlugin, markers } from 'photo-sphere-viewer';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { Router, ActivatedRoute } from '@angular/router';
import { showroom } from '../../shares/models/showroomint.model';
import {CookieService} from 'ngx-cookie-service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-showroom-room',
  templateUrl: './showroom-room.component.html',
  styleUrls: ['./showroom-room.component.css']
})
export class ShowroomRoomComponent implements OnInit {

  constructor(private shService: ShowroomService, private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService) { }

  id: Number;
  Title: String;
  Description: String;
  AuthorName : String;
  thisShowroom : showroom;
  PhotoFileName: String;
viewCount: number = 0;
  imageURL = this.shService.PhotoUrl
  
 img: String;

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Title = this.route.snapshot.params['title'];
    this.shService.GET_showroom(this.id).subscribe((data)=>{
    this.thisShowroom = data;
    this.thisShowroom.viewCount++
    var val = {
      id: this.id,viewCount: this.thisShowroom.viewCount
    }
      this.shService.EDIT_showroom(val).subscribe((data)=>{
        console.log(data);
      });
  });
  this.main();
  }

  ngAfterViewInit(): void{

  }

  getAuthHeaders(){
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });

  }

  main(){
   
    this.shService.GET_showroom(this.id).subscribe((data)=>{
      this.thisShowroom = data
  
    const view = new Viewer({
      panorama: (this.shService.PhotoUrl+this.thisShowroom.PhotoFileName),
      container: 'viewer',
      caption: this.Title,
      loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
      defaultLat: 0.3,
      touchmoveTwoFingers: true,
      mousewheelCtrlKey: true,
  
    });
    
  });
  
  } 

}
