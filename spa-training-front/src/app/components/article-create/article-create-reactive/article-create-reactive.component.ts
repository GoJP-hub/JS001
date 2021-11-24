import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppError } from 'src/app/common/app-error';
import { BadRequestError } from 'src/app/common/bad-request-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { ArticleCreateService } from 'src/app/services/article-create.service';

@Component({
  selector: 'app-article-create-reactive',
  templateUrl: './article-create-reactive.component.html',
  styleUrls: ['./article-create-reactive.component.scss']
})
export class ArticleCreateReactiveComponent implements OnInit {

  form = this.fb.group({
    articleTitle: ['', Validators.required],
    articleContent: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(
    private articleCreateService: ArticleCreateService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get articleTitle() { return this.form.get('articleTitle')};
  get articleContent() { return this.form.get('articleContent')};

  onSubmit(){
    const form = this.form;
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
