import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmemberPageRoutingModule } from './detailmember-routing.module';

import { DetailmemberPage } from './detailmember.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmemberPageRoutingModule
  ],
  declarations: [DetailmemberPage]
})
export class DetailmemberPageModule {}
