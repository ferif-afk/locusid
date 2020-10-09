import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmerchantPage } from './detailmerchant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmerchantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmerchantPageRoutingModule {}
