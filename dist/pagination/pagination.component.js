import { Component, Input, Output, EventEmitter } from '@angular/core';
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.movePage = new EventEmitter();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        console.log('oninit pagination');
    };
    PaginationComponent.prototype.createRange = function (number) {
        var numberList = [];
        for (var i = 0; i < number; i++) {
            numberList.push(i);
        }
        return numberList;
    };
    PaginationComponent.prototype.onMovePage = function (pageIndex) {
        this.movePage.emit(pageIndex);
    };
    PaginationComponent.prototype.onMoveFirst = function () {
        var FIRST_PAGE_INDEX = 0;
        if (this.currentPageIndex == FIRST_PAGE_INDEX)
            return;
        this.onMovePage(FIRST_PAGE_INDEX);
    };
    PaginationComponent.prototype.onMoveLast = function () {
        var LAST_PAGE_INDEX = this.totalPageCount - 1;
        if (this.currentPageIndex == LAST_PAGE_INDEX)
            return;
        this.onMovePage(LAST_PAGE_INDEX);
    };
    PaginationComponent.prototype.onMoveNext = function () {
        var LAST_PAGE_INDEX = this.totalPageCount - 1;
        if (this.currentPageIndex == LAST_PAGE_INDEX)
            return;
        this.currentPageIndex = this.currentPageIndex + 1;
        this.onMovePage(this.currentPageIndex);
    };
    PaginationComponent.prototype.onMovePrev = function () {
        var FIRST_PAGE_INDEX = 0;
        if (this.currentPageIndex == FIRST_PAGE_INDEX)
            return;
        this.currentPageIndex = this.currentPageIndex - 1;
        this.onMovePage(this.currentPageIndex);
    };
    return PaginationComponent;
}());
export { PaginationComponent };
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-simplePagination',
                styleUrls: ["./pagination.component.scss"],
                templateUrl: 'pagination.component.html'
            },] },
];
/** @nocollapse */
PaginationComponent.ctorParameters = function () { return []; };
PaginationComponent.propDecorators = {
    'totalPageCount': [{ type: Input },],
    'currentPageIndex': [{ type: Input },],
    'movePage': [{ type: Output },],
};
//# sourceMappingURL=pagination.component.js.map