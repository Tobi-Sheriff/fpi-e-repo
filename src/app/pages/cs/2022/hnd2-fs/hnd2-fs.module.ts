import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Hnd2FsPageRoutingModule } from './hnd2-fs-routing.module';
import { Hnd2FsPage } from './hnd2-fs.page';

import { FileSizePipe } from '../../../../file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hnd2FsPageRoutingModule
  ],
  declarations: [Hnd2FsPage, FileSizePipe]
})
export class Hnd2FsPageModule {}
