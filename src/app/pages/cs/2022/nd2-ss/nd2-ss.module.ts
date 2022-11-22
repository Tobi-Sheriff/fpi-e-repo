import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'
import { Nd2SsPageRoutingModule } from './nd2-ss-routing.module';
import { Nd2SsPage } from './nd2-ss.page';

import { FileSizePipe } from '../../../../file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nd2SsPageRoutingModule
  ],
  declarations: [Nd2SsPage, FileSizePipe]
})
export class Nd2SsPageModule {}
