import { ErrorHandler, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeadlinePipe } from './pipes/headline.pipe';
import { ThumbnailDirective } from './directives/thumbnail.directive';
import { AppErrorHandler } from './common/app-error-hander';
import { environment } from 'src/environments/environment';

const httpInterceptorProviders = environment.httpInterceptorProviders;

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HeadlinePipe,
    ThumbnailDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler},
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
