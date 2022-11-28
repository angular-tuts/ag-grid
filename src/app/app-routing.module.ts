import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortingComponent } from './components/sorting/sorting.component';

const routes: Routes = [
  { path: 'sorting', component: SortingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
