import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteringComponent } from './components/filtering/filtering.component';
import { SortingComponent } from './components/sorting/sorting.component';

const routes: Routes = [
  { path: 'sorting', component: SortingComponent },
  { path: 'filtering', component: FilteringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
