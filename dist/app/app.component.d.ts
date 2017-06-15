import { OnInit } from '@angular/core';
import { GridColumn, GridOption, GridEvent } from './grid/grid.model';
import { GridComponent } from './grid/grid.component';
export declare class AppComponent implements OnInit {
    grid: GridComponent;
    gridColumns: GridColumn[];
    gridOption: GridOption;
    gridEvent: GridEvent;
    sampleDataList: any[];
    ngOnInit(): void;
}
