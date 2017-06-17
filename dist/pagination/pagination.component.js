var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "totalPageCount", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "currentPageIndex", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PaginationComponent.prototype, "movePage", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'ng-simplePagination',
        styleUrls: ["./pagination.component.scss"],
        templateUrl: 'pagination.component.html'
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map