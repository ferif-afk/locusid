import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPromoPage } from './detailpromo.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPromoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPromoPageRoutingModule {}
