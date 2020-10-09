import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TentangPage } from './tentang.page';

import { TentangPageRoutingModule } from './tentang-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TentangPageRoutingModule
  ],
  declarations: [TentangPage]
})
export class TentangPageModule {}
