import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailartikelPage } from './detailartikel.page';

const routes: Routes = [
  {
    path: '',
    component: DetailartikelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailartikelPageRoutingModule {}
