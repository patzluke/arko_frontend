import { Component, OnInit } from '@angular/core';
import { Event } from '../../../../shares/models/Events.model';
import { EventService } from 'src/app/shares/services/Events.service';

@Component({
  selector: 'app-admin-events-list',
  templateUrl: './admin-events-list.component.html',
  styleUrls: ['./admin-events-list.component.css']
})
export class AdminEventsListComponent implements OnInit {

  constructor(private eService: EventService) { }

  Events: Event[] = [];
  p: number = 1;

  ngOnInit(): void {
    this.showEvents();
    
  }

  showEvents(){
    this.eService.GET_events().subscribe(data=>{
      this.Events=data;
      this.Events.reverse();
      console.log(data);
    });
  }

  maxEvents: boolean = false;

  

  deleteClick(event){
    if(confirm('Are you sure??')){
      this.eService.DELETE_event(event.id).subscribe(data=>{
        alert("Successfully Deleted The Event");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Event")
      })
      

    } 
  }

}
