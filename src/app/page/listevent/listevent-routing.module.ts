import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventPage } from './listevent.page';

const routes: Routes = [
  {
    path: '',
    component: ListEventPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEventPageRoutingModule {}
