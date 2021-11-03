import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { Router } from '@angular/router';
import { showroom } from '../../../../shares/models/showroom.model';


@Component({
  selector: 'app-admin-showroom-list',
  templateUrl: './admin-showroom-list.component.html',
  styleUrls: ['./admin-showroom-list.component.css']
})
export class AdminShowroomListComponent implements OnInit {


  showrooms: showroom[] = [];
  constructor(private shService: ShowroomService) { }
  p: number = 1;

  ngOnInit(): void {

    this.showShowrooms();
  }
  showShowrooms(){
    this.shService.GET_showrooms().subscribe(data=>{
      this.showrooms=data;
      this.showrooms.reverse();
      console.log(data);
    });
  }
  deleteClick(showroom){
    if(confirm('Are you sure??')){
      this.shService.DELETE_showroom(showroom.id).subscribe(data=>{
        alert("Successfully Deleted The Article");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Showroom")
      })
      

    } 
  }

}
