import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { showroom } from '../../shares/models/showroomint.model';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';



@Component({
  selector: 'app-showroom-page',
  templateUrl: './showroom-page.component.html',
  styleUrls: ['./showroom-page.component.css']
})

export class ShowroomPageComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private shService: ShowroomService) { }

  ngOnInit(): void {
    this.showShowrooms();
  }
  p: number = 1;
  count: Number = 5;

showrooms: showroom[] = [];
PhotoFilePath: String;
PhotoFileName: String;
imageURL = this.shService.PhotoUrl

showShowrooms(){
  this.shService.GET_showroomsReadOnly().subscribe(data=>{
    this.showrooms=data;
    this.showrooms.reverse();
    console.log(data);
  });

}
ari : String;
cali: String;
nyc: String;
category: String;

allFunc(e){
  this.shService.GET_showroomsReadOnly().subscribe(data=>{
    this.showrooms=data.reverse()
  });
}

testFunc(e){
  this.shService.GET_showroomsReadOnly().subscribe(data=>{
    this.showrooms=data.reverse().filter(data =>{
    return data.category == this.ari;  
    });
    console.log(data);
    console.log(this.ari);
  });
}

testFunc2(e){
  this.shService.GET_showroomsReadOnly().subscribe(data=>{
    this.showrooms=data.reverse().filter(data =>{
    return data.category == this.cali;  
    });
    console.log(data);
    console.log(this.cali);
  });
}

testFunc3(e){
  this.shService.GET_showroomsReadOnly().subscribe(data=>{
    this.showrooms=data.reverse().filter(data =>{
    return data.category == this.nyc;  
    });
    console.log(data);
    console.log(this.nyc);
  });
}



}
