import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hnd1PageRoutingModule } from './hnd1-routing.module';

import { Hnd1Page } from './hnd1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hnd1PageRoutingModule
  ],
  declarations: [Hnd1Page]
})
export class Hnd1PageModule {}
