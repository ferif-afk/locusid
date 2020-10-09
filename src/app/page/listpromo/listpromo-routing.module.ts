import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPromoPage } from './listpromo.page';

const routes: Routes = [
  {
    path: '',
    component: ListPromoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPromoPageRoutingModule {}
