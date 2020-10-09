import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmemberPageRoutingModule } from './listmember-routing.module';

import { ListmemberPage } from './listmember.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmemberPageRoutingModule
  ],
  declarations: [ListmemberPage]
})
export class ListmemberPageModule {}
