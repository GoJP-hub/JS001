import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent implements OnInit, OnChanges {

  pageList: Array<number> = [];
  @Input() currentPage: number = 0;
  @Input() maxPage: number = 0;

  constructor() { }

  ngOnInit(): void{}

  ngOnChanges(): void {
    if (this.maxPage){
      this.pagenate();
    };
  }

  pagenate(){
    const maxPageCount = this.maxPage + 1;
    this.pageList = new Array(maxPageCount);
    for (let index = 0; index < maxPageCount; index++) {
      this.pageList[index] = index;
    }
  }

}
