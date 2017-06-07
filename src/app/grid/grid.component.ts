import { Component, Input, OnInit } from '@angular/core';
import { Grid, GridColumn } from './grid.model';

@Component({
  selector: 'ng-simpleGrid',
  styleUrls: [`./grid.component.scss`],
  templateUrl: 'grid.component.html'
})

export class GridComponent implements OnInit {
  
  @Input()
  grid: Grid = {
      columns: [
        { type: 'text', key: 'grid',     name:'Grid',   width: '100%'}
      ],
      option: {
        rowsPerPage: 10
      },
      event: {
        onClickRow: (row, index) => {

        }
      }
  };


  dataList: any[] = [];
  dataListToShow: any[] = [];

  dataListPerPage: any[];
  
  pagination: any;
  totalPageCount: number    = 1;

  currentPageIndex: number = 1;


  adderRowList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  

  setDataList(dataList: any[]): void {
    this.dataList = dataList;
    

    this.initializeData(dataList);
  }

  initializeData(dataList: any[]) {
    this.pagination       = this._getPagination(dataList);
    this.dataListPerPage  = this._getDataListPerPage(dataList);
    this.dataListToShow   = this.dataListPerPage[0];
    this.adderRowList     = this._getWillAddRowList(this.dataListToShow);
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

  onClickDataItem(e: any,  value: any, data: any, key: string, index: number): void {
    let column: GridColumn = this._getColumnByProperty(this.grid.columns, key, 'onClick');

    if(column == null)
      return ;

    column.onClick(e, value, data, index);
  }

  onMovePage(pageNum: number): void {
    if(!this.dataListPerPage) return ;
    this.dataListToShow   = this.dataListPerPage[pageNum - 1];
    this.adderRowList     = this._getWillAddRowList(this.dataListToShow);
    this.currentPageIndex = pageNum;
  }

  createRange(number: number){
    var numberList: number[] = [];
    for(var i = 1; i <= number; i++){
      numberList.push(i);
    }
    return numberList;
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

  private _getPagination(dataList: any[]): any {
    let rowsPerPage   = this.grid.option.rowsPerPage;
    let dataListSize  = dataList.length;
    
    let totalPageCount      = Math.ceil(dataListSize / rowsPerPage);
    let totalPageCountList  = [];

    this.totalPageCount = totalPageCount;

    let pagination = {
      totalPageCount:     totalPageCount,
      totalPageCountList: totalPageCountList
    };

    return pagination;
  }

  private _getDataListPerPage(dataList: any[]): any {
    let dataListPerPage = [];
    let rowsPerPage     = this.grid.option.rowsPerPage;

    for(let i = 0; i <= this.totalPageCount; i++) {
      dataListPerPage.push(this.dataList.splice(0, rowsPerPage));
    }

    return dataListPerPage;
  }

  private _getWillAddRowList(lastDataList: any[]) {
    let willAddRowCount = this.grid.option.rowsPerPage - lastDataList.length;

    return new Array(willAddRowCount);
  }
}