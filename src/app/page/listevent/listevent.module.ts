import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListEventPage } from './listevent.page';

import { ListEventPageRoutingModule } from './listevent-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListEventPageRoutingModule
  ],
  declarations: [ListEventPage]
})
export class ListEventPageModule {}
