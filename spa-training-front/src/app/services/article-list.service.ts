import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService extends BaseService{

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 
    super()
  }

  getArticle(pageNo: number, displayLimit: number):Observable<any>{ 
    console.log("[GET-ARTICLE] PAGE: " + pageNo);
    console.log("[GET-ARTICLE] PAGE-LIMIT: " + displayLimit);
    const params = new HttpParams()
      .set("offset", (pageNo * displayLimit).toString())
      .set("limit", displayLimit.toString());
    
    return this.httpClient.get<Article[]>(this.apiUrl + '/article/list', { params })
      .pipe( catchError( this.handleError )
      );
  }

  countArticles():Observable<any>{
    console.log('[COUNT-ARTICLE');
    return this.httpClient.get<any>(this.apiUrl + '/article/count')
      .pipe( catchError( this.handleError ));
  }
}
