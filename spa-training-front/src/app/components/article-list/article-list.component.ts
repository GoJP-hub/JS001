import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
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

  currentPage: number = 0;
  maxPage: number = 0;
  PAGE_SIZE: number = 5

  carouselPosition = {
    maxWidth: '600px',
    width: '100%',
    margin: '3% auto 0 auto',
  };

  constructor(
    private route: ActivatedRoute,
    private articleListservice: ArticleListService
    ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
        let page = +params.get('page');
        console.log('SUBSCRIBE: ' + page);
        if (isNaN(page)){
          page = 0;
        }
        this.pagenate(page);
        this.getArticles(page);
      }
    );
  }

  getArticles(page: number){
    this.articleListservice.getArticle(page, this.PAGE_SIZE).subscribe(
      (articles) => { 
        console.log(JSON.stringify(articles)); 
        this.articleList = articles;
      },
      (err: AppError) => {
        if (err instanceof NotFoundError){
          console.log('ERROR: NOT FOUND ERROR')
        } else if (err instanceof BadRequestError){
          console.log('ERROR: BAD REQUEST ERROR')
        }else{
          throw err;
        }
      }  
    );
  }

  pagenate(page:number){
    this.currentPage = page;
    this.articleListservice.countArticles().subscribe(
      (cnt) => {
        console.log('[SUCCESS]' + JSON.stringify(cnt));
        const articleCount = cnt.count;
        console.log('[SUCCESS] article count: ' + articleCount);
        const maxPageCount = Math.ceil(articleCount / this.PAGE_SIZE);
        console.log('[SUCCESS] max page count: ' + maxPageCount);
        this.maxPage = maxPageCount - 1;
      },
      (err: AppError) => {
        if (err instanceof NotFoundError){
          console.log('ERROR: NOT FOUND ERROR')
        } else if (err instanceof BadRequestError){
          console.log('ERROR: BAD REQUEST ERROR')
        }else{
          throw err;
        }
      }
    );
  }
}
