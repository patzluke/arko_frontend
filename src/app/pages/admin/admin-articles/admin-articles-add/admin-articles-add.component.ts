import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { Article } from '../../../../shares/models/Articles.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-admin-articles-add',
  templateUrl: './admin-articles-add.component.html',
  styleUrls: ['./admin-articles-add.component.css']
})
export class AdminArticlesAddComponent implements OnInit {



  constructor(private Arservice: ArticleService, private router: Router,private cookieService: CookieService,) { }
  id: any;
  lastname: String = this.cookieService.get('lastname');
  firstname: String = this.cookieService.get('firstname');
  AuthorName: String = this.lastname + " " + this.firstname;
  PhotoFilePath: String;
  PhotoFileName: String;
  dateCreated: Date = new Date();
  viewCount:number;

  ngOnInit(): void {
  }
 
  addArticle(form: NgForm){
    if(confirm("Are you Sure you want to Add this Article?")){
    const value = form.value;
    this.viewCount = 0;
    const is_approved = false;
    const PhotoFileName = this.PhotoFileName;
    const AuthorName = this.AuthorName;
    const dateCreated = this.dateCreated;
    const newArticle = new Article(value.id,value.title, value.desc, value.content, PhotoFileName,AuthorName,dateCreated, this.viewCount,AuthorName,is_approved);
    this.Arservice.registerArticle(newArticle).subscribe(
      data => {
        console.log(data);
        console.log(this.AuthorName);
        console.log(this.dateCreated);
        alert("Successfully Added")
        this.router.navigate(['dashboard/articles']);
      },
      error => {
        alert("There was an Error with Adding an Article")
      }
       
      );
    }
  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.Arservice.UploadPhoto_Article(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.Arservice.PhotoUrl+this.PhotoFileName;
    })
  }

 
}
