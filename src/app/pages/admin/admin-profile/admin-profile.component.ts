import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { user } from 'src/app/shares/models/userint.model';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from 'src/app/shares/services/Account.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private route: Router,
              private cookieService: CookieService,
              private Aservice: AccountService,
              private router: ActivatedRoute,) { }

 
  
id: any;
lastname: String; 
email: String;
password: String;
PhotoFilePath: String;
PhotoFileName: String;
thisUser: user;
firstname: String;

imageURL = this.Aservice.PhotoUrl

  ngOnInit(): void {
    this.id = this.cookieService.get('id');
    this.Aservice.GET_account(this.id).subscribe((data)=>{
      this.lastname = data.lastname
      this.firstname = data.firstname
      this.email = data.email
      this.PhotoFileName = this.Aservice.PhotoUrl+data.PhotoFileName;
     
    });
  }

  editMode = false;
  onEdit(){
    this.editMode = true;
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.photoUpload = false;
    this.Aservice.UploadPhoto_Account(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.Aservice.PhotoUrl+this.PhotoFileName;
 
    });
    
  }

  photoUpload = true;
  editAccounts(){
    if(this.PhotoFileName !== null && this.photoUpload == false){
    var val = {
      id:this.id, firstname:this.firstname,lastname: this.lastname, email: this.email, PhotoFileName: this.PhotoFileName};
    }else{
      var val = {
        id:this.id, firstname:this.firstname,lastname: this.lastname, email: this.email, PhotoFileName: this.PhotoFilePath};
    }
    if(confirm('Are you Sure?')){
      this.Aservice.EDIT_accounts(val).subscribe(res=>{
        alert("The Account has been Successfully Updated!");
        this.editMode = false;
      });
    }
    
  }

}
