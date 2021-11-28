import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleCreateReactiveComponent } from './components/article-create/article-create-reactive/article-create-reactive.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article', canActivate: [AuthGuard],
      children: [
        {path: 'create', component: ArticleCreateReactiveComponent},
        {path: ':id', component: ArticleDetailComponent},
      ]
  },
  { path: '**', component: ArticleListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
