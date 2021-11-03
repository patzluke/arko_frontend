import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Article } from '../../../../shares/models/Articles.model';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { CookieService } from 'ngx-cookie-service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox/checkbox';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-articles-list',
  templateUrl: './admin-articles-list.component.html',
  styleUrls: ['./admin-articles-list.component.css']
})
export class AdminArticlesListComponent implements OnInit {

  constructor(private Arservice: ArticleService,
    private cookieService: CookieService,public dialog: MatDialog,
   ) { 
     
    }


  statusApproved: String = "Approved";
  statusRejected: String = "Ongoing";
  articles: Article[] = [];
  is_superuser = this.cookieService.get('is_superuser')
  is_author = this.cookieService.get('is_author')
  dateToday: Date = new Date();
  p: number = 1;
  is_approved: boolean
  
  ngOnInit(): void {
    this.showArticles();
   
  }
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  showArticles(){
    this.Arservice.GET_articles().subscribe(data=>{
      this.articles=data;
      this.articles.reverse();
      console.log(data);
    });
  }

  deleteClick(article){
    if(confirm('Are you sure??')){
      this.Arservice.DELETE_article(article.id).subscribe(data=>{
        alert("Successfully Deleted The Article");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Article")
      })
      

    } 
  }

  onChange(ob: MatCheckboxChange, id: number){
    if(ob.checked){
      this.Arservice.GET_article(id).subscribe((data=>{
        console.log('This is checked',id);
        this.is_approved = true
        var val = {
          id:id, is_approved: this.is_approved
        }
        this.Arservice.EDIT_article(val).subscribe((data=>{
          console.log(data)
          if(this.is_approved=true){
            
          }
        }))
      }))
      
    }else{
      this.Arservice.GET_article(id).subscribe((data=>{
        console.log('This is unchecked',id);
        this.is_approved = false
        var val = {
          id:id, is_approved: this.is_approved
        }
        this.Arservice.EDIT_article(val).subscribe((data=>{
          console.log(data)
          if(this.is_approved=false){
            
          }
        }))
      })) 
      console.log('Not Checked')
    }
  }
  content: String;

  openDialog(id: number) {
    this.Arservice.GET_article(id).subscribe((data=>{
      this.content = data.content
    }))
    let dialogRef = this.dialog.open(this.callAPIDialog,{
      width: '400px',

    });
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
}

  
}
