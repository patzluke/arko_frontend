import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MerchService } from 'src/app/shares/services/Merch.service';

@Component({
  selector: 'app-admin-merch-edit',
  templateUrl: './admin-merch-edit.component.html',
  styleUrls: ['./admin-merch-edit.component.css']
})
export class AdminMerchEditComponent implements OnInit {

  id: Number;
  mname: String;
  price: Number;
  desc: String;
  PhotoFilePath: String;
  PhotoFileName: String;
    

  constructor(private Mservice: MerchService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.Mservice.GET_merch(this.id).subscribe((data)=>{
      this.mname = data.mname;
      this.price = data.price;
      this.desc = data.desc
     this.PhotoFileName = this.Mservice.PhotoUrl+data.PhotoFileName;
      console.log(data);
  });

  }

  editMerch(){
    if(this.PhotoFileName !== null && this.photoUpload == false){
    var val = {
      id:this.id, mname: this.mname, price: this.price, desc: this.desc, PhotoFileName: this.PhotoFileName};
    }
    else{
      var val = {
        id:this.id, mname: this.mname, price: this.price, desc: this.desc, PhotoFileName: this.PhotoFilePath};
      }
    if(confirm('Are you Sure?')){
      this.Mservice.EDIT_merch(val).subscribe(res=>{
        alert("The Merchandise has been Successfully Updated!");
        this.route.navigate(['dashboard/merchandise']);
      });
    }
    
  }

  photoUpload = true;

  uploadPhoto(event){
   
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.photoUpload = false;
    this.Mservice.UploadPhoto_Merchandise(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.Mservice.PhotoUrl+this.PhotoFileName;
 
    });
  
  }


}
