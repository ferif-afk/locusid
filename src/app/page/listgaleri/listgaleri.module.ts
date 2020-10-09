import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListGaleriPage } from './listgaleri.page';

import { ListGaleriPageRoutingModule } from './listgaleri-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListGaleriPageRoutingModule
  ],
  declarations: [ListGaleriPage]
})
export class ListGaleriPageModule {}
