import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  constructor(private httpClient: HttpClient) { }

  getArticle(pageNo: number, displayLimit: number):Observable<any>{ 
    const params = new HttpParams()
      .set("offset", (pageNo * displayLimit).toString())
      .set("limit", displayLimit.toString());
    
    return this.httpClient.get<Article[]>('http://localhost:8080/article/list', { params });
  }
}
