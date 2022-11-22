import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hnd1SsPageRoutingModule } from './hnd1-ss-routing.module';

import { Hnd1SsPage } from './hnd1-ss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hnd1SsPageRoutingModule
  ],
  declarations: [Hnd1SsPage]
})
export class Hnd1SsPageModule {}
