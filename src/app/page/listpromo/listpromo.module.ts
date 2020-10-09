import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPromoPage } from './listpromo.page';

import { ListPromoPageRoutingModule } from './listpromo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListPromoPageRoutingModule
  ],
  declarations: [ListPromoPage]
})
export class ListPromoPageModule {}
