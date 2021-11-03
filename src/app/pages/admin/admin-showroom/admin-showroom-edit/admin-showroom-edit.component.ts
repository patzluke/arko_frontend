import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { showroom } from '../../../../shares/models/showroomint.model';

@Component({
  selector: 'app-admin-showroom-edit',
  templateUrl: './admin-showroom-edit.component.html',
  styleUrls: ['./admin-showroom-edit.component.css']
})
export class AdminShowroomEditComponent implements OnInit {

  constructor(private shService: ShowroomService, private route: ActivatedRoute,private router: Router) { }
  states = [
    {name: "Arizona" },
    {name: "California"},
    {name: "Colorado"},
    {name: "New York"},
  ];


  id: Number;
  AuthorName: String;
  Description: String;
  Title: String;
  PhotoFilePath: String;
  PhotoFileName: String;
  photoUpload = true;
  StartDate: Date;
  EndDate: Date;
  category: String;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.shService.GET_showroom(this.id).subscribe((data)=>{
      this.Title = data.Title;
      this.Description = data.Description;
      this.AuthorName = data.AuthorName;
      this.PhotoFileName = this.shService.PhotoUrl+data.PhotoFileName;
      this.StartDate = data.StartDate;
      this.EndDate = data.EndDate;
      this.category = data.category;
      console.log(this.category);
    });
  }
  onChange(e){
    
    this.category = e;
    console.log(this.category);

  }


  editShowroom(){
    
    if(this.PhotoFileName !== null && this.photoUpload == false){
      var val = {
        id:this.id, Title: this.Title, Description: this.Description, AuthorName: this.AuthorName,  
        PhotoFileName: this.PhotoFileName, StartDate: this.StartDate, EndDate: this.EndDate,category:this.category};
      }else{
        var val = {
          id:this.id, Title: this.Title, Description: this.Description, AuthorName: this.AuthorName,  
        PhotoFileName: this.PhotoFilePath, StartDate: this.StartDate, EndDate: this.EndDate,category:this.category};
      }
      if(confirm('Are you Sure?')){
        this.shService.EDIT_showroom(val).subscribe(res=>{
          alert("The Showroom has been Successfully Updated!");
         
          this.router.navigate(['dashboard/exhibit']);
        });
      }
  }
 
  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.photoUpload = false;
    this.shService.UploadPhoto_Showroom(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.shService.PhotoUrl+this.PhotoFileName;
 
    });
    
  }


}
