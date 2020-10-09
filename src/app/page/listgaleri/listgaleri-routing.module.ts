import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGaleriPage } from './listgaleri.page';

const routes: Routes = [
  {
    path: '',
    component: ListGaleriPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGaleriPageRoutingModule {}
