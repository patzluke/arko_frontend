import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { article } from '../../shares/models/articleint.model';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  checked: boolean;
  imageURL = this.Arservice.PhotoUrl
 p: number = 1;
  count: Number = 5;
articles: article[] = []
is_approved: Boolean;
id: number;

    constructor(private Arservice: ArticleService) { }

    ngOnInit() {
        // an example array of 150 items to be paged
        this.showArticles();
        
    }
    articleLength: number = this.articles.length;

    showArticles(){
      this.Arservice.GET_articlesReadOnly().subscribe(data=>{
        this.articles=data;
        this.articles.reverse();
        console.log(this.articles)
        for(var i = 0; i <= this.articles.length; ++i){
          if(this.articles[i].is_approved == false){
            this.articles.splice(i,1);
            console.log(this.articles[i])
            
          }
          for(var i = 0; i <= this.articles.length; ++i){
            if(this.articles[i].is_approved == false){
              this.articles.splice(i,1);
              console.log(this.articles[i])
              
            }
            
          }
        }
        
      });
  
   
    }

   
      
  }

  
  
  

