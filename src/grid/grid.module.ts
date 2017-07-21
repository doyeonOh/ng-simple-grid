import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { PaginationComponent } from './pagination.component';
import { NgSimplePaginationModule } from './pagination.module';

@NgModule({
  imports: [CommonModule, NgSimplePaginationModule],
  declarations: [GridComponent],
  exports: [CommonModule, GridComponent]
})
export class NgSimpleGridModule {}
