import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent]
})
export class NgSimplePaginationModule {}
