import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  // 下記のプロパティは、本来はgetArticleIdのメソッド内で、constとして呼び出されるもの。修正が必要
  getArticle(){
    const id = Number(this.route.snapshot?.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
