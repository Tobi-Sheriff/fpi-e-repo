import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nd2FsPageRoutingModule } from './nd2-fs-routing.module';

import { Nd2FsPage } from './nd2-fs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nd2FsPageRoutingModule
  ],
  declarations: [Nd2FsPage]
})
export class Nd2FsPageModule {}
