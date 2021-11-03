import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from '../../../shares/models/articleint.model';
import { ArticleService } from 'src/app/shares/services/Articles.service';
import { NumericLiteral } from 'typescript';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private Arservice: ArticleService) { }

  articles: article[] = [];
  PhotoFilePath: String;
  PhotoFileName: String;
  imageURL = this.Arservice.PhotoUrl
  viewCount: number;
   counter : number = 0;
  ngOnInit(): void {
    this.showArticles();
    
  }

  onMoreArticles(){
    this.router.navigate(['more']);
  }

  showArticles(){
    this.Arservice.GET_articlesReadOnly().subscribe(data=>{
      this.articles=data;
      this.articles.reverse(); 
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
    console.log(this.articles.length);
  }


}
