import { Component, OnInit } from '@angular/core';
import { Useraccount } from '../../../../shares/models/UserAccount.model';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/shares/services/Account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-accounts-add',
  templateUrl: './admin-accounts-add.component.html',
  styleUrls: ['./admin-accounts-add.component.css']
})
export class AdminAccountsAddComponent implements OnInit {

  constructor(private Aservice: AccountService, private router: Router) { }

  lastname: any;
  PhotoFilePath: String;
  PhotoFileName: String;

  ngOnInit(): void {
  }

  addAccount(form: NgForm){
    if(confirm("Are you Sure you want to Add this Account?")){
    const value = form.value;
    const pass = value.password = "123"
    const PhotoFileName = this.PhotoFileName
    const newAccount = new Useraccount(value.id, value.lastname,value.firstname, value.email, pass, PhotoFileName );
    this.Aservice.registerUser(newAccount).subscribe(
      data => {
        console.log(data);
        alert("Successfully Added")
        this.router.navigate(['dashboard/account']);
      },
      error => {
        alert("There was an Error with Adding an Account")
      }
       
      );
    }
    
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.Aservice.UploadPhoto_Account(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.Aservice.PhotoUrl+this.PhotoFileName;
    })
  }
  



}
