import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmemberPage } from './detailmember.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmemberPageRoutingModule {}
