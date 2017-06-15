import { OnInit } from '@angular/core';
import { GridColumn, GridEvent } from './grid.model';
export declare class GridComponent implements OnInit {
    columns: GridColumn[];
    event: GridEvent;
    rowsPerPage: number;
    dataList: any[];
    emptyMessage: string;
    emptySubMessage: string;
    dataListToShow: any[];
    dataListPerPage: any[];
    totalPageCount: number;
    currentPageIndex: number;
    emptyRows: any[];
    constructor();
    ngOnInit(): void;
    setDataList(dataList: any[]): void;
    initializeData(dataList: any[]): void;
    search(key: string, value: string): void;
    onClickDataItem(e: any, value: any, datarow: any, key: string, index: number): void;
    onMovePage(pageIndex: number): void;
    onClickDataRow(e: any, row: any, index: number): void;
    private _getColumnByProperty(columns, key, property);
    private _getTotalPageCount(rowsPerPage, dataList);
    private _getDataListPerPage(rowsPerPage, dataList);
    private _getEmptyRowsToBeFilled(rowsPerPage, dataList);
}
