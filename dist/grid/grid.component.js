import { Component, Input } from '@angular/core';
var GridComponent = (function () {
    function GridComponent() {
        this.rowsPerPage = 10;
        this.dataList = [];
        this.emptyMessage = '검색한 내역이 없습니다';
        this.dataListToShow = [];
        this.totalPageCount = 1;
        this.currentPageIndex = 0;
        this.emptyRows = [];
    }
    GridComponent.prototype.ngOnInit = function () {
        if (!this.columns)
            console.error('ng-simpleGrid: grid.columns is not exists.');
    };
    GridComponent.prototype.setDataList = function (dataList) {
        this.dataList = dataList;
        this.initializeData(dataList);
    };
    GridComponent.prototype.initializeData = function (dataList) {
        this.totalPageCount = this._getTotalPageCount(this.rowsPerPage, dataList);
        this.dataListPerPage = this._getDataListPerPage(this.rowsPerPage, dataList);
        this.dataListToShow = this.dataListPerPage[0];
        this.emptyRows = this._getEmptyRowsToBeFilled(this.rowsPerPage, this.dataListToShow);
    };
    GridComponent.prototype.search = function (key, value) {
        if (!this.dataList)
            return;
        if (value === '') {
            this.initializeData(this.dataList);
            return;
        }
        var filteredList = [];
        for (var _i = 0, _a = this.dataList; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data[key].include(data))
                filteredList.push(data);
        }
        this.initializeData(filteredList);
    };
    GridComponent.prototype.onClickDataItem = function (e, value, datarow, key, index) {
        var column = this._getColumnByProperty(this.columns, key, 'onClick');
        if (column == null)
            return;
        column.onClick(e, value, index, datarow);
    };
    GridComponent.prototype.onMovePage = function (pageIndex) {
        if (!this.dataListPerPage)
            return;
        this.dataListToShow = this.dataListPerPage[pageIndex];
        this.emptyRows = this._getEmptyRowsToBeFilled(this.rowsPerPage, this.dataListToShow);
        this.currentPageIndex = pageIndex;
    };
    GridComponent.prototype.onClickDataRow = function (e, row, index) {
        if (this.event && this.event.onClickRow) {
            this.event.onClickRow(row, index);
        }
    };
    GridComponent.prototype._getColumnByProperty = function (columns, key, property) {
        var selectedColumn = null;
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            if (column.key == key) {
                if (column.hasOwnProperty(property)) {
                    selectedColumn = column;
                    break;
                }
            }
        }
        return selectedColumn;
    };
    GridComponent.prototype._getTotalPageCount = function (rowsPerPage, dataList) {
        var dataListSize = dataList.length;
        return Math.ceil(dataListSize / rowsPerPage);
    };
    GridComponent.prototype._getDataListPerPage = function (rowsPerPage, dataList) {
        var dataListPerPage = [];
        for (var i = 0; i <= this.totalPageCount; i++) {
            dataListPerPage.push(this.dataList.splice(0, rowsPerPage));
        }
        return dataListPerPage;
    };
    GridComponent.prototype._getEmptyRowsToBeFilled = function (rowsPerPage, dataList) {
        var emptyRowsCount = rowsPerPage - dataList.length;
        return new Array(emptyRowsCount);
    };
    return GridComponent;
}());
export { GridComponent };
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-simpleGrid',
                styleUrls: ["./grid.component.scss"],
                templateUrl: 'grid.component.html'
            },] },
];
/** @nocollapse */
GridComponent.ctorParameters = function () { return []; };
GridComponent.propDecorators = {
    'columns': [{ type: Input },],
    'event': [{ type: Input },],
    'rowsPerPage': [{ type: Input },],
    'dataList': [{ type: Input },],
    'emptyMessage': [{ type: Input },],
    'emptySubMessage': [{ type: Input },],
};
//# sourceMappingURL=grid.component.js.map