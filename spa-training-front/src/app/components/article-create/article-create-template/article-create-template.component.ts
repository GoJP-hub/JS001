import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { ArticleCreateService } from 'src/app/services/article-create.service';

@Component({
  selector: 'app-article-create-template',
  templateUrl: './article-create-template.component.html',
  styleUrls: ['./article-create-template.component.scss']
})
export class ArticleCreateTemplateComponent implements OnInit {

  constructor(private articleCreateService: ArticleCreateService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log('article.value: ' + JSON.stringify(form.value));
    console.log('article.valid: ' + form.valid);
    this.articleCreateService.createArticle(form.value).subscribe(
      (data) => {
        console.log('SUCCESS: ' + JSON.stringify(data));
        alert('投稿しました!');
      },
      (err: AppError) => {
        if (err instanceof BadRequestError){
          alert('ERROR: BAD REQUEST\n' + JSON.stringify(err));
        } else if (err instanceof NotFoundError){
          alert('ERROR: NOT FOUND REQUEST\n' + JSON.stringify(err));
        } else {
          alert('ERROR: UNKOWN\n' + JSON.stringify(err));
          throw err;
        }
      }
    )
  }

}
