import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { Article } from '../../../../shares/models/Articles.model';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-admin-articles-edit',
  templateUrl: './admin-articles-edit.component.html',
  styleUrls: ['./admin-articles-edit.component.css']
})
export class AdminArticlesEditComponent implements OnInit {

  id: Number;
  content: String;
  desc: String;
  title: String;
  PhotoFilePath: String;
  PhotoFileName: String;
  editedBy: String;
  lastname: String = this.cookieService.get('lastname');
  firstname: String = this.cookieService.get('firstname');
  AuthorName: String = this.lastname + " " + this.firstname;
  dateToday: Date;
  constructor(private Arservice: ArticleService,  
    private router: Router, 
    private route: ActivatedRoute,
    private cookieService: CookieService) { }

 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Arservice.GET_article(this.id).subscribe((data)=>{
      this.title = data.title;
      this.desc = data.desc;
      this.content = data.content;
      this.PhotoFileName = this.Arservice.PhotoUrl+data.PhotoFileName;
      console.log(data);
    });
  }

  editArticle(){
    this.dateToday = new Date()
    this.editedBy = this.AuthorName
    if(this.PhotoFileName !== null && this.photoUpload == false){
    var val = {
      id:this.id, title: this.title, desc: this.desc, content: this.content,  
      PhotoFileName: this.PhotoFileName, editedBy: this.editedBy};
    }else{
      var val = {
        id:this.id, title: this.title, desc: this.desc, content: this.content,  
        PhotoFileName: this.PhotoFilePath,editedBy: this.editedBy};
    }
    if(confirm('Are you Sure?')){
      this.Arservice.EDIT_article(val).subscribe(res=>{
        alert("The Article has been Successfully Updated!");
        this.router.navigate(['dashboard/articles']);
      });
    }
    
  }

  photoUpload = true;

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.photoUpload = false;
    this.Arservice.UploadPhoto_Article(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.Arservice.PhotoUrl+this.PhotoFileName;
 
    });
    
  }

}
