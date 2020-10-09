import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailGaleriPage } from './detailgaleri.page';

const routes: Routes = [
  {
    path: '',
    component: DetailGaleriPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailGaleriPageRoutingModule {}
