import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { Article } from 'src/app/models/article';
import { ArticleListService } from 'src/app/services/article-list.service';
import { ARTICLES } from '../../models/mock-article'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList: Article[] = [];

  carouselPosition = {
    maxWidth: '600px',
    width: '100%',
    margin: '3% auto 0 auto',
  };

  constructor(private articleListservice: ArticleListService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.articleListservice.getArticle(0, 5).subscribe(
      (articles) => { 
        console.log(JSON.stringify(articles)); 
        this.articleList = articles;
      },
      (err: AppError) => {
        if (err instanceof BadRequestError){
          console.log('ERROR: BAD REQUEST ERROR')
        }else{
          throw err;
        }
      }  
    );
  }

}
