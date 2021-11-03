import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from 'src/app/shares/services/Events.service';
import { Router } from '@angular/router';
import { Event } from '../../../../shares/models/Events.model';




@Component({
  selector: 'app-admin-events-add',
  templateUrl: './admin-events-add.component.html',
  styleUrls: ['./admin-events-add.component.css']
})
export class AdminEventsAddComponent implements OnInit {

  constructor(private eService: EventService, private router: Router) { }

  PhotoFilePath: String;
  PhotoFileName: String;

  ngOnInit(): void {
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.eService.UploadPhoto_Event(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.eService.PhotoUrl+this.PhotoFileName;
    })
  }

  addEvent(form: NgForm){
    if(confirm("Are you Sure you want to Add this Event?")){
      
      const value = form.value;
      const PhotoFileName = this.PhotoFileName
      const newEvent = new Event(value.id,value.eventName,value.eventLink,PhotoFileName,value.StartDate,value.EndDate);
      this.eService.registerEvent(newEvent).subscribe(
        data => {
          console.log(data);
          alert("Successfully Added")
          this.router.navigate(['dashboard/events']);
        },
        error => {
          alert("There was an Error with Adding an Event")
        }
         
        );
      }
  }

}
