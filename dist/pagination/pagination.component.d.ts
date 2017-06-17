import { OnInit, EventEmitter } from '@angular/core';
export declare class PaginationComponent implements OnInit {
    totalPageCount: number;
    currentPageIndex: number;
    movePage: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    createRange(number: number): any[];
    onMovePage(pageIndex: number): void;
    onMoveFirst(): void;
    onMoveLast(): void;
    onMoveNext(): void;
    onMovePrev(): void;
}
