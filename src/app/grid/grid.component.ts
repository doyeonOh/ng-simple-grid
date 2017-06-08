import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridColumn, GridOption, GridEvent } from './grid.model';

@Component({
  selector: 'ng-simpleGrid',
  styleUrls: [`./grid.component.scss`],
  templateUrl: 'grid.component.html'
})

export class GridComponent implements OnInit {

  @Input()
  columns: GridColumn[];

  @Input()
  event: GridEvent;

  @Input()
  rowsPerPage: number = 10;

  @Input()
  dataList: any[] = [];

  @Input()
  emptyMessage: string = '검색한 내역이 없습니다';

  @Input()
  emptySubMessage: string;

  dataListToShow: any[] = [];

  dataListPerPage: any[];

  totalPageCount: number   = 1;

  currentPageIndex: number = 1;

  emptyRows: any[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    if(!this.columns) 
      console.error('ng-simpleGrid: grid.columns is not exists.');
  }
  
  setDataList(dataList: any[]): void {
    this.dataList = dataList;
    
    this.initializeData(dataList);
  }

  initializeData(dataList: any[]) {
    this.totalPageCount   = this._getTotalPageCount(this.rowsPerPage, dataList);
    this.dataListPerPage  = this._getDataListPerPage(this.rowsPerPage, dataList);
    this.dataListToShow   = this.dataListPerPage[0];
    this.emptyRows        = this._getEmptyRowsToBeFilled(this.rowsPerPage, this.dataListToShow);
  }

  search(key: string, value: string): void {
    if(!this.dataList)
      return ;

    if(value === '') {
      this.initializeData(this.dataList);
      return ;
    }

    let filteredList = [];
    
    for(let data of this.dataList) {
      if(data[key].include(data))
        filteredList.push(data);
    }

    this.initializeData(filteredList);
  }

  onClickDataItem(e: any,  value: any, datarow: any, key: string, index: number): void {
    let column: GridColumn = this._getColumnByProperty(this.columns, key, 'onClick');

    if(column == null)
      return ;

    column.onClick(e, value, index, datarow);
  }

  onMovePage(pageIndex: number): void {
    if(!this.dataListPerPage) 
      return ;

    this.dataListToShow   = this.dataListPerPage[pageIndex - 1];
    this.emptyRows        = this._getEmptyRowsToBeFilled(this.rowsPerPage, this.dataListToShow);
    this.currentPageIndex = pageIndex;
  }

  onClickDataRow(e: any, row: any, index: number) {
    if(this.event && this.event.onClickRow) {
      this.event.onClickRow(row, index);
    }
  }

  private _getColumnByProperty(columns: GridColumn[], key: string, property: string): GridColumn {
    let selectedColumn: GridColumn = null;

    for(let column of columns) {
      if(column.key == key) {
        if(column.hasOwnProperty(property)) {
          selectedColumn = column;
          break;
        }
      }
    }

    return selectedColumn;
  }

  private _getTotalPageCount(rowsPerPage: number, dataList: any[]): any {
    let dataListSize  = dataList.length;
    
    return Math.ceil(dataListSize / rowsPerPage);
  }

  private _getDataListPerPage(rowsPerPage: number, dataList: any[]): any {
    let dataListPerPage = [];

    for(let i = 0; i <= this.totalPageCount; i++) {
      dataListPerPage.push(this.dataList.splice(0, rowsPerPage));
    }

    return dataListPerPage;
  }

  private _getEmptyRowsToBeFilled(rowsPerPage: number, dataList: any[]) {
    let emptyRowsCount = rowsPerPage - dataList.length;

    return new Array(emptyRowsCount);
  }
}