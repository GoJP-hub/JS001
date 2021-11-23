import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, mergeMap } from 'rxjs/operators'
import { ARTICLES } from "../models/mock-article";

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const newReq = req.clone( { setHeaders: {accept: 'application/json'}});
        return of(null).pipe(
            mergeMap(() => {
                console.log('[MockBackend] URL: ' + req.url);
                if (req.method === 'GET'){
                    if (req.url.endsWith('/article/list')){
                        const begin = parseInt(req.params.get('offset') || '0', 10);
                        const end = begin + parseInt(req.params.get('limit') || '1', 10);
                        return of(new HttpResponse({ status: 200, body: ARTICLES.slice(begin, end)}));
                    }
                } else if (req.method === 'POST'){
                    if (req.url.endsWith('/article') && req.body.articleTitle && req.body.articleContent){
                        return of(new HttpResponse({ status: 200, body: {message: 'OK'}}));
                    }
                }
                return next.handle(req)
            } ),
            delay(1000),
        );
    }
}