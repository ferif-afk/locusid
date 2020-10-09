import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailPromoPage } from './detailpromo.page';

import { DetailPromoPageRoutingModule } from './detailpromo-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DetailPromoPageRoutingModule
  ],
  declarations: [DetailPromoPage]
})
export class DetailPromoPageModule {}
