import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailartikelPageRoutingModule } from './detailartikel-routing.module';

import { DetailartikelPage } from './detailartikel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailartikelPageRoutingModule
  ],
  declarations: [DetailartikelPage]
})
export class DetailartikelPageModule {}
