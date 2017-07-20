import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-simple-pagination',
  styleUrls: [`./pagination.component.scss`],
  templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnInit {

  @Input()
  totalPageCount: number;

  @Input()
  currentPageIndex: number;

  @Input()
  numberCountOfPage: number = 9;

  @Output()
  movePage: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() { 
    console.log('oninit pagination');
  }

  getDynamicPageNumberList(currentPageIndex: number, totalPageCount: number, numberCountOfPage: number) {
    if(totalPageCount === 0) 
      return [];
    
    if(totalPageCount <= numberCountOfPage) {
      return this.createRange(0, totalPageCount);
    }
    
    let from  = 0;
    let to    = 0;
    let half  = Math.floor(numberCountOfPage / 2);
    let min   = currentPageIndex - half;
    let max   = currentPageIndex + half + 1;

    if(min < 0) {
      from  = 0;
      to    = numberCountOfPage;
    } else if(max > totalPageCount) {
      from  = totalPageCount - numberCountOfPage;
      to    = totalPageCount;
    } else {
      from  = min;
      to    = max;
    }
    
    return this.createRange(from, to);
  }

  createRange(from: number, to: number): any[]{
    var numberList: number[] = [];
    for(var i = from; i < to; i++){
      numberList.push(i);
    }
    return numberList;
  }

  onMovePage(pageIndex: number): void {
    this.movePage.emit(pageIndex);
  }

  onMoveFirst(): void {
    const FIRST_PAGE_INDEX = 0;

    if(this.currentPageIndex == FIRST_PAGE_INDEX) return;

    this.onMovePage(FIRST_PAGE_INDEX);
  }

  onMoveLast(): void {
    const LAST_PAGE_INDEX = this.totalPageCount - 1;

    if(this.currentPageIndex == LAST_PAGE_INDEX) return;

    this.onMovePage(LAST_PAGE_INDEX);
  }

  onMoveNext(): void {
    const LAST_PAGE_INDEX = this.totalPageCount - 1;

    if(this.currentPageIndex == LAST_PAGE_INDEX) return;

    this.currentPageIndex = this.currentPageIndex + 1;
    this.onMovePage(this.currentPageIndex);
  }
  
  onMovePrev(): void {
    const FIRST_PAGE_INDEX = 0;

    if(this.currentPageIndex == FIRST_PAGE_INDEX) return;

    this.currentPageIndex = this.currentPageIndex - 1;
    this.onMovePage(this.currentPageIndex);
  }
}