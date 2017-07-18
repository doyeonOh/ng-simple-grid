
<!--[![Build Status](https://travis-ci.org/tb/ng2-nouislider.svg?branch=master)](https://travis-ci.org/tb/ng2-nouislider)
[![npm version](https://badge.fury.io/js/ng2-nouislider.svg)](http://badge.fury.io/js/ng2-nouislider)
[![Downloads](http://img.shields.io/npm/dm/ng2-nouislider.svg)](https://npmjs.org/package/ng2-nouislider)-->
# ng-simpleGrid

angular2+ grid components. also provide pagination component.

## Install
```typescript
npm install --save ng-simplegrid
```

## Import
```typesript
import { NgSimpleGridModule } from 'ng-simpleGrid';

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
import { GridComponent, GridColumn } from 'ng-simpleGrid';

@ViewChild('grid')
grid: GridComponent;

gridOption: NgSimpleGrid = {
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
<ng-simpleGrid #grid 
  [grid]="gridOption" 
  [dataList]="sampleDataList">
</ng-simpleGrid>
```


## config
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