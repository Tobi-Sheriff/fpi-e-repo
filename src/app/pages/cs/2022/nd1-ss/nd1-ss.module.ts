import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Nd1SsPageRoutingModule } from './nd1-ss-routing.module';
import { Nd1SsPage } from './nd1-ss.page';

import { FileSizePipe } from '../../../../file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nd1SsPageRoutingModule
  ],
  declarations: [Nd1SsPage, FileSizePipe]
})
export class Nd1SsPageModule {}
