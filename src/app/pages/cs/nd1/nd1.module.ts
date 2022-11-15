import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Nd1PageRoutingModule } from './nd1-routing.module';
import { Nd1Page } from './nd1.page';

import { FileSizePipe } from '../../../file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nd1PageRoutingModule
  ],
  declarations: [Nd1Page, FileSizePipe]
})
export class Nd1PageModule {}
