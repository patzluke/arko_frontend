import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { EventService } from 'src/app/shares/services/Events.service';

@Component({
  selector: 'app-admin-events-edit',
  templateUrl: './admin-events-edit.component.html',
  styleUrls: ['./admin-events-edit.component.css']
})
export class AdminEventsEditComponent implements OnInit {

  constructor(private eService: EventService, private router: ActivatedRoute, private route: Router) { }

  id: Number;
  eventName: String;
  eventLink: String;
  PhotoFilePath: String;
  PhotoFileName: String;
  StartDate: Date;
  EndDate: Date;

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.eService.GET_event(this.id).subscribe((data)=>{
      this.eventName = data.eventName;
      this.eventLink = data.eventLink;
     this.PhotoFileName = this.eService.PhotoUrl+data.PhotoFileName;
     this.StartDate = data.StartDate;
     this.EndDate = data.EndDate;
      console.log(data);
  })
}

  photoUpload = true;

  uploadPhoto(event){
   
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.photoUpload = false;
    this.eService.UploadPhoto_Event(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.eService.PhotoUrl+this.PhotoFileName;
 
    });
  
  }

  editEvent(){
    if(this.PhotoFileName !== null && this.photoUpload == false){
    var val = {
      id:this.id, eventName: this.eventName, eventLink: this.eventLink,
      PhotoFileName: this.PhotoFileName, StartDate: this.StartDate, EndDate: this.EndDate};
    }
    else{
      var val = {
        id:this.id, eventName: this.eventName, eventLink: this.eventLink, 
        PhotoFileName: this.PhotoFilePath, StartDate: this.StartDate, EndDate: this.EndDate};
      }
    if(confirm('Are you Sure?')){
      this.eService.EDIT_event(val).subscribe(res=>{
        alert("The Merchandise has been Successfully Updated!");
        this.route.navigate(['dashboard/events']);
      });
    }

    
    
  }

}
