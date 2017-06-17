import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PaginationComponent],
  declarations: [PaginationComponent],
  providers: [],
})
export class PaginationModule { }
