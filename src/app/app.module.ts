import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { NavComponent } from './components/nav/nav.component';
import { GridApiComponent } from './components/grid-api/grid-api.component';
import { ColumnApiComponent } from './components/column-api/column-api.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingComponent,
    FilteringComponent,
    NavComponent,
    GridApiComponent,
    ColumnApiComponent
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
