import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleCreateService extends BaseService{

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { 
    super();
  }

  createArticle(article: object): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl + '/article', article).pipe(catchError(this.handleError));
  }
}
