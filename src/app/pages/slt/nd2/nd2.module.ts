import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nd2PageRoutingModule } from './nd2-routing.module';

import { Nd2Page } from './nd2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nd2PageRoutingModule
  ],
  declarations: [Nd2Page]
})
export class Nd2PageModule {}
