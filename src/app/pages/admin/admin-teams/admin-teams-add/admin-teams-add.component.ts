import { Component, OnInit } from '@angular/core';
import { Teams } from '../../../../shares/models/Teams.model';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/shares/services/Teams.Service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-teams-add',
  templateUrl: './admin-teams-add.component.html',
  styleUrls: ['./admin-teams-add.component.css']
})
export class AdminTeamsAddComponent implements OnInit {

  constructor(private tService: TeamsService, private router: Router) { }
  yearLevel = [
    {level: 'First Year'},
    {level: 'Second Year'},
    {level: 'Third Year'},
    {level: 'Fourth Year'},
    {level: 'Fifth Year'},
  ];

  ngOnInit(): void {
  }

  PhotoFilePath: String;
  PhotoFileName: String;
  id: Number;
  name: String;
  description: String;
  year: String;
  section: String;
  position: String;

  
  addTeam(form: NgForm){
    const value = form.value;
    console.log(value.year);
    if(confirm("Are you Sure you want to Add this Event?")){
    var val ={
      id: value.id, name: value.name, position:value.position, section: value.section, 
      description:value.description, PhotoFileName: this.PhotoFileName, year: value.year.level
    }
    this.tService.registerTeam(val).subscribe(
      data => {
        console.log(data);
        alert("Successfully Added")
        this.router.navigate(['dashboard/teams']);
      },
      error => {
        alert("There was an Error with Adding an Event")
      }
       
      );

  }
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.tService.UploadPhoto_Event(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.tService.PhotoUrl+this.PhotoFileName;
    })
  }

}
