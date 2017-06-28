import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GridComponent, PaginationComponent],
  exports: [CommonModule, GridComponent, PaginationComponent]
})
export class GridModule {}
