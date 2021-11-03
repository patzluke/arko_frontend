import { Component, OnInit } from '@angular/core';
import { Teams } from '../../../../shares/models/Teams.model';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/shares/services/Teams.Service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-teams-edit',
  templateUrl: './admin-teams-edit.component.html',
  styleUrls: ['./admin-teams-edit.component.css']
})
export class AdminTeamsEditComponent implements OnInit {

  constructor(private tService: TeamsService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.tService.GET_Team(this.id).subscribe(data=>{
      this.name = data.name;
      this.section=data.section;
      this.year = data.year;
      this.description=data.description;
      this.PhotoFileName = this.tService.PhotoUrl+data.PhotoFileName;
      this.position=data.position;
      console.log(data)
    })
  }
  yearLevel = [
    {level: 'First Year'},
    {level: 'Second Year'},
    {level: 'Third Year'},
    {level: 'Fourth Year'},
    {level: 'Fifth Year'},
  ];
  PhotoFilePath: String;
  PhotoFileName: String;
  id: Number;
  name: String;
  description: String;
  year: String;
  section: String;
  position: String;
  photoUpload = true;

  onChange(e){
    console.log(e);
    this.year = e;
  }

  editTeam(){
    if(this.PhotoFileName !== null && this.photoUpload == false){
      var val = {
        id:this.id, name: this.name, section: this.section,
        PhotoFileName: this.PhotoFileName,  description: this.description, position:this.position,
      year: this.year};
      }
      else{
        var val = {
          id:this.id, name: this.name, section: this.section,
          PhotoFileName: this.PhotoFilePath,  description: this.description, position:this.position,
          year: this.year};
        }

      if(confirm('Are you Sure?')){
        this.tService.EDIT_Team(val).subscribe(res=>{
          alert("The Team Member has been Successfully Updated!");
          this.route.navigate(['dashboard/teams']);
          console.log(val)
        });
      }
  }
level:String
  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.photoUpload = false;
    this.tService.UploadPhoto_Event(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.tService.PhotoUrl+this.PhotoFileName;
    })
  }

}
