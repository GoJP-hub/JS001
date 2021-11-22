import { NgModule } from '@angular/core';
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
import { CommonInterceptor } from './intercepts/common-interceptor';
import { MockBackendInterceptor } from './intercepts/mock-backend-interceptor';

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
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
