import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailEventPage } from './detailevent.page';

import { DetailEventPageRoutingModule } from './detailevent-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailEventPageRoutingModule
  ],
  declarations: [DetailEventPage]
})
export class DetailEventPageModule {}
