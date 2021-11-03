import { Component, OnInit } from '@angular/core';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { Merch } from '../../../../shares/models/Merch.model'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin-merch-add',
  templateUrl: './admin-merch-add.component.html',
  styleUrls: ['./admin-merch-add.component.css']
})
export class AdminMerchAddComponent implements OnInit {
  
  PhotoFilePath: String;
  PhotoFileName: String;

  constructor(private Mservice: MerchService, private router: Router) { }

  url: any;
  message = "";


  ngOnInit(): void {
  
  }

  addMerch(form: NgForm){
    if(confirm("Are you Sure you want to Add this Merchandise?")){
      const value = form.value;
      const PhotoFileName = this.PhotoFileName
      const newMerch = new Merch(value.id,value.mname, value.price, value.desc, PhotoFileName );
      this.Mservice.registerMerch(newMerch).subscribe(
        data => {
          console.log(data);
          alert("Successfully Added")
          this.router.navigate(['dashboard/merchandise']);
          console.log(new Date())
        },
        error => {
          alert("There was an Error with Adding an Merchandise")
        }
         
        );
      }
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.Mservice.UploadPhoto_Merchandise(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.Mservice.PhotoUrl+this.PhotoFileName;
    })
  }


 
  

}
