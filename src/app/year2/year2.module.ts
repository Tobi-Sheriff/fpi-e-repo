import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Year2PageRoutingModule } from './year2-routing.module';

import { Year2Page } from './year2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Year2PageRoutingModule
  ],
  declarations: [Year2Page]
})
export class Year2PageModule {}
