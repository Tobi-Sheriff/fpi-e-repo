import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Hnd2SsPageRoutingModule } from './hnd2-ss-routing.module';
import { Hnd2SsPage } from './hnd2-ss.page';

import { FileSizePipe } from '../../../../file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hnd2SsPageRoutingModule
  ],
  declarations: [Hnd2SsPage, FileSizePipe]
})
export class Hnd2SsPageModule {}
