import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailGaleriPage } from './detailgaleri.page';

import { DetailGaleriPageRoutingModule } from './detailgaleri-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailGaleriPageRoutingModule
  ],
  declarations: [DetailGaleriPage]
})
export class DetailGaleriPageModule {}
