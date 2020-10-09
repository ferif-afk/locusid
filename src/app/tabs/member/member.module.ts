import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemberPage } from './member.page';

import { MemberPageRoutingModule } from './member-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MemberPage }]),
    MemberPageRoutingModule,
  ],
  declarations: [MemberPage]
})
export class MemberPageModule {}
