import { Component, OnInit, ViewChild } from '@angular/core';
import { Grid } from './grid/grid.model';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('grid')
  grid: GridComponent;

  gridOption: Grid = {
      columns: [
        { type: 'text', key: 'id',     name:'아이디', width: '33%'},
        { type: 'text', key: 'name',   name:'이름',   width: '33%'},
        { type: 'text', key: 'email',  name:'이메일', width: '33%'},
      ],
      option: {
        rowsPerPage: 10
      },
      event: {
        onClickRow: (row: any, index: number) => {
          
        }
      }
  };

  sampleDataList: any[] = [
    { id: 'jacky', name: 'Deby Jones', email: 'jacky@naver.com'},
    { id: 'micky', name: 'Deby Jones', email: 'jacky@naver.com'},
    { id: 'hanny', name: 'Deby Jones', email: 'jacky@naver.com'}
  ];

  ngOnInit(): void {
    this.grid.setDataList(this.sampleDataList);
  }
}
