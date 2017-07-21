
<!--[![Build Status](https://travis-ci.org/tb/ng2-nouislider.svg?branch=master)](https://travis-ci.org/tb/ng2-nouislider)
[![npm version](https://badge.fury.io/js/ng2-nouislider.svg)](http://badge.fury.io/js/ng2-nouislider)
[![Downloads](http://img.shields.io/npm/dm/ng2-nouislider.svg)](https://npmjs.org/package/ng2-nouislider)-->
# ng-simple-grid

angular4+ grid components. also provide pagination component.
[see demo](https://ng-simple-grid-example.firebaseapp.com/)

* `ng-simpleGrid` changed to `ng-simple-grid`

## Install
```
npm install --save ng-simple-grid
```

## Import
```typesript
import { NgSimpleGridModule } from 'ng-simple-grid';

@NgModule({
  ...
  imports: [
    ...,
    NgSimpleGridModule
  ]
})
```

## Usage
```typescript
import { NgSimpleGrid, GridComponent, GridColumn } from 'ng-simple-grid';

@ViewChild('grid')
grid: GridComponent;

gridConfig: NgSimpleGrid = {
  columns: [
    { type: 'text',   key: 'id',     name:'ID'    },
    { type: 'text',   key: 'name',   name:'NAME'  },
    { type: 'button', key: 'email',  name:'EMAIL' }
  ],
  option: {
    rowsPerPage: 10
  }
};

sampleDataList: any[] = [
    { id: '1', name: 'Deby Jones',      email: 'jacky@naver.com'},
    { id: '2', name: 'Micheal Jackson', email: 'micl@daum.com'},
    { id: '3', name: 'Emma Watson',     email: 'emm@google.com'}
];
```

```html
<ng-simple-grid #grid 
  [config]="gridConfig" 
  [dataList]="sampleDataList">
</ng-simple-grid>
```

You can also dynamically set the data list using the setDataList () function.

```typescript
ngOnInit() {
  this.grid.setDataList(this.sampleDataList);
}
```

## Config
columns

| key        | Description |
| ------------- | ------------- |
| type          | type of table data(ex. 'text', 'button')  |
| key           | the key value of the data list to represent the value  |
| name          | name of the column header  |
| width?        | the width of the column(ex. '100%', '100px')  |
| value?        | set value directly without mapping to key |
| nullValue?    | the value to be set if the mapped key is null or no mapped.  |
| onCustomValue?| it provides a function to customize a value |
| onClick?      | a callback when a table data is clicked   |


option

| key          | Description |
| -------------   | ------------- |
| rowsPerPage?     | number of lines to show on a page(default: 10)  |
| emptyMessage?    | message to show if data list does not exist  |
| emptySubMessage? | secondary message to show if data list does not exist  |

event

| key        | Description |
| ------------- | ------------- |
| onClickRow?   | callback when a line is clicked  |

## License
MIT