import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nd2SsPageRoutingModule } from './nd2-ss-routing.module';

import { Nd2SsPage } from './nd2-ss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nd2SsPageRoutingModule
  ],
  declarations: [Nd2SsPage]
})
export class Nd2SsPageModule {}
