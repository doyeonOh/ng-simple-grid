import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GridColumn, GridOption, GridEvent, NgSimpleGrid } from './grid.model';

@Component({
  selector: 'ng-simple-grid',
  styleUrls: [`./grid.component.scss`],
  templateUrl: './grid.component.html'
})

export class GridComponent implements OnInit {
  @Input()
  grid: NgSimpleGrid = {
    columns: [
      { type: 'text', key: 'grid', name: 'Grid', width: '100%'}
    ],
    option: {
      rowsPerPage: 10,
      emptyMessage: '검색한 내역이 없습니다',
      emptySubMessage: ''
    },
    event: {
      onClickRow: (datarow: any, index: number) => {
      }
    }
  };

  @Input()
  dataList: any[] = [];

  @Input()
  emptyMessage: string = '검색한 내역이 없습니다';

  @Input()
  emptySubMessage: string;

  dataListToShow: any[] = [];

  dataListPerPage: any[];

  totalPageCount: number   = 1;

  currentPageIndex: number = 0;

  emptyRows: any[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    if(this.dataList && this.dataList.length > 0) {
      this.initializeData(this.dataList);
    }
  }
  
  setDataList(dataList: any[]): void {
    this.dataList = dataList;
    
    this.initializeData(dataList);
  }

  initializeData(dataList: any[]) {
    let rowsPerPage       = this.grid.option.rowsPerPage;

    this.totalPageCount   = this._getTotalPageCount(dataList, rowsPerPage);
    this.dataListPerPage  = this._getDataListPerPage(dataList, rowsPerPage, this.totalPageCount);
    this.dataListToShow   = this.dataListPerPage[0] || [];
    this.emptyRows        = this._getEmptyRowsToBeFilled(this.dataListToShow, rowsPerPage);
  }

  search(key: string, value: string): void {
    if(!this.dataList)
      return ;

    if(value === '') {
      this.initializeData(this.dataList);
      return ;
    }

    let filteredList = this.dataList.filter(data => data[key].includes(value));

    this.initializeData(filteredList);
  }

  onClickDataItem(e: any,  value: any, datarow: any, key: string, index: number): void {
    e.stopPropagation();

    let column: GridColumn = this._getColumnByProperty(this.grid.columns, key, 'onClick');

    if(column == null)
      return ;
    console.log('coolumn,', column);

    column.onClick(e, value, index, datarow);
  }

  createRange(number: number) {
    let numberList: number[] = [];
    for(let i = 1; i <= number; i++) {
      numberList.push(i);
    }
    return numberList;
  }

  deriveValue(column: GridColumn, datarow: any, rowIndex: number, colIndex: number) {
    if(column.value)          return column.value;
    if(column.onCustomValue)  return column.onCustomValue(datarow, rowIndex, colIndex);

    return column.nullValue && !datarow[column.key] ? column.nullValue : datarow[column.key];
  }

  onMovePage(pageIndex: number): void {
    if(!this.dataListPerPage) 
      return ;

    let rowsPerPage     = this.grid.option.rowsPerPage;

    this.dataListToShow   = this.dataListPerPage[pageIndex];
    this.emptyRows        = this._getEmptyRowsToBeFilled(this.dataListToShow, rowsPerPage);
    this.currentPageIndex = pageIndex;
  }

  onClickDataRow(e: any, row: any, index: number) {
    if(this.grid.event && this.grid.event.onClickRow) {
      this.grid.event.onClickRow(row, index);
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

  private _getTotalPageCount(dataList: any[], rowsPerPage: number): any {
    let dataListSize  = dataList.length;
    
    return Math.ceil(dataListSize / rowsPerPage);
  }

  private _getDataListPerPage(dataList: any[], rowsPerPage: number, totalPageCount: number): any {
    let dataListPerPage = [];

    for(let i = 0; i <= totalPageCount; i++) {
      dataListPerPage.push(this.dataList.splice(0, rowsPerPage));
    }

    return dataListPerPage;
  }

  private _getEmptyRowsToBeFilled(lastDataList: any[], rowsPerPage: number) {
    if(lastDataList && lastDataList.length === 0)
      return [];

    let emptyRowsCount = rowsPerPage - lastDataList.length;

    return new Array(emptyRowsCount);
  }
}