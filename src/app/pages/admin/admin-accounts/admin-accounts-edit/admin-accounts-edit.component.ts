import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Useraccount } from 'src/app/shares/models/UserAccount.model';
import { AccountService } from 'src/app/shares/services/Account.service';
import { Account } from '../../../../shares/models/Accounts.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-accounts-edit',
  templateUrl: './admin-accounts-edit.component.html',
  styleUrls: ['./admin-accounts-edit.component.css']
})
export class AdminAccountsEditComponent implements OnInit {

 
  
 
  id: Number;
  lastname: String; 
  email: String;
  password: String;
  firstname: String;
  PhotoFilePath: String;
  PhotoFileName: String;
  constructor(private Aservice: AccountService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.Aservice.GET_account(this.id).subscribe((data)=>{
      this.lastname = data.lastname;
      this.email = data.email;
      this.firstname = data.firstname;
      this.PhotoFileName = this.Aservice.PhotoUrl+data.PhotoFileName;
      console.log(data);
    });
    
  }
  editAccounts(){
    if(this.PhotoFileName !== null && this.photoUpload == false){
    var val = {
      id:this.id, firstname: this.firstname,lastname: this.lastname, email: this.email, PhotoFileName: this.PhotoFileName};
    }else{
      var val = {
        id:this.id,firstname: this.firstname, lastname: this.lastname, email: this.email, PhotoFileName: this.PhotoFilePath};
    }
    if(confirm('Are you Sure?')){
      this.Aservice.EDIT_accounts(val).subscribe(res=>{
        alert("The Account has been Successfully Updated!");
        this.route.navigate(['dashboard/account']);
      });
    }
    
  }
  photoUpload = true;

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
}
