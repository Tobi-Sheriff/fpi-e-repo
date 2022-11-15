import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hnd2PageRoutingModule } from './hnd2-routing.module';

import { Hnd2Page } from './hnd2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hnd2PageRoutingModule
  ],
  declarations: [Hnd2Page]
})
export class Hnd2PageModule {}
