import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgSimpleGridModule } from '../src/grid/grid.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSimpleGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
