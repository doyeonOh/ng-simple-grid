import { Component, OnInit, ViewChild } from '@angular/core';
import { GridColumn, GridOption, GridEvent } from '../src/grid/grid.model';
import { GridComponent } from '../src/grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('grid')
  grid: GridComponent;

  gridColumns: GridColumn[] = [
    { type: 'text',   key: 'id',     name:'아이디', width: '33%'},
    { type: 'text',   key: 'name',   name:'이름',   width: '33%'},
    { type: 'button', key: 'email',  name:'이메일', width: '33%', 
      onClick: (e: any, value: any, data: any, index: number) => {
        alert(value);
      }},
  ];

  gridOption: GridOption = {
    
  };

  gridEvent: GridEvent = {
    onClickRow: (row: any, index: number) => {
      
    }
  }



  sampleDataList: any[] = [
    { id: '1', name: 'Deby Jones',      email: 'jacky@naver.com'},
    { id: '2', name: 'Micheal Jackson', email: 'micl@daum.com'},
    { id: '3', name: 'Emma Watson',     email: 'emm@google.com'},
    { id: '4', name: 'Violet',          email: 'viy@gmail.com'},
    { id: '5', name: 'Paul Pinix',      email: 'pudil2dn@lyly.com'},
    { id: '6', name: 'Noah Leo',        email: 'neodsp@nono.com'},
    { id: '7', name: 'Jackson',         email: 'bddoq@aaaa.com'},
    { id: '8', name: 'Elsa',            email: 'skl2lpa@dddd.com'},
    { id: '9', name: 'Frangken',        email: 'dnkidef@bberr.com'},
    { id: '10', name: 'Hudson Sam',     email: 'vvodp@gmail.com'},
    { id: '11', name: 'Sam Ko',         email: 'xzoq@gmail.com'},
    { id: '12', name: 'Phillip Oh',     email: 'dpfei@gmail.com'},
    { id: '13', name: 'Adriana Kwon',   email: 'cslls@gmail.com'},
    { id: '14', name: 'Ezar Siqo',      email: 'qwqwe@gmail.com'},
    { id: '15', name: 'Benjamin K',     email: 'qqqq@gmail.com'},
    { id: '16', name: 'Kain Dick',      email: 'wwwww@gmail.com'},
    { id: '17', name: 'Minis',          email: 'ccccc@gmail.com'},
    { id: '18', name: 'Mark P',         email: 'xxxxx@gmail.com'},
    { id: '19', name: 'Marcus Siri',    email: 'asddw@gmail.com'},
    { id: '20', name: 'Morgan Jas',     email: 'saas@gmail.com'},
    { id: '21', name: 'Mason Junior',   email: 'lklk@gmail.com'},
    { id: '22', name: 'Moses Victor',   email: 'ppoi@gmail.com'},
    { id: '23', name: 'Martin K',       email: 'poiz@gmail.com'}
  ];

  ngOnInit(): void {
    this.grid.setDataList(this.sampleDataList);
  }
}
