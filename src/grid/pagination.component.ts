import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-simplePagination',
  styleUrls: [`./pagination.component.scss`],
  templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnInit {

  @Input()
  totalPageCount: number;

  @Input()
  currentPageIndex: number;

  @Output()
  movePage: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() { 
    console.log('oninit pagination');
  }

  createRange(number: number): any[]{
    var numberList: number[] = [];
    for(var i = 0; i < number; i++){
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