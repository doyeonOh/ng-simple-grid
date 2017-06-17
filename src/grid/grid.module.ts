import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PaginationModule],
  declarations: [GridComponent],
  exports: [GridComponent, PaginationModule]
})
export class GridModule {}
