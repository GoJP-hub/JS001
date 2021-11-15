import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../../models/mock-article'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  article = ARTICLES;
  constructor() { }

  ngOnInit(): void {
  }

}
