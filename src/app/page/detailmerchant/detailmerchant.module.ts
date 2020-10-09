import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmerchantPageRoutingModule } from './detailmerchant-routing.module';

import { DetailmerchantPage } from './detailmerchant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmerchantPageRoutingModule
  ],
  declarations: [DetailmerchantPage]
})
export class DetailmerchantPageModule {}
