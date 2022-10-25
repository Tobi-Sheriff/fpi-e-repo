import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Year1PageRoutingModule } from './year1-routing.module';

import { Year1Page } from './year1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Year1PageRoutingModule
  ],
  declarations: [Year1Page]
})
export class Year1PageModule {}
