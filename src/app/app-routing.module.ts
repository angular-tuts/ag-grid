import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnApiComponent } from './components/column-api/column-api.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { GridApiComponent } from './components/grid-api/grid-api.component';
import { SortingComponent } from './components/sorting/sorting.component';

const routes: Routes = [
  { path: 'sorting', component: SortingComponent },
  { path: 'filtering', component: FilteringComponent },
  { path: 'grid-api', component: GridApiComponent },
  { path: 'column-api', component: ColumnApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
