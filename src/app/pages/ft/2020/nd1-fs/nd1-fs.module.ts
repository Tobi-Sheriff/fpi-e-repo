import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nd1FsPageRoutingModule } from './nd1-fs-routing.module';

import { Nd1FsPage } from './nd1-fs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nd1FsPageRoutingModule
  ],
  declarations: [Nd1FsPage]
})
export class Nd1FsPageModule {}
