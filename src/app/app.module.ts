import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { FilteringComponent } from './components/filtering/filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingComponent,
    FilteringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
