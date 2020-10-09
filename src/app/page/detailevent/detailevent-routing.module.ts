import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEventPage } from './detailevent.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEventPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEventPageRoutingModule {}
