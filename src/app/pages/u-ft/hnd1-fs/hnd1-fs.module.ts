import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hnd1FsPageRoutingModule } from './hnd1-fs-routing.module';

import { Hnd1FsPage } from './hnd1-fs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hnd1FsPageRoutingModule
  ],
  declarations: [Hnd1FsPage]
})
export class Hnd1FsPageModule {}
