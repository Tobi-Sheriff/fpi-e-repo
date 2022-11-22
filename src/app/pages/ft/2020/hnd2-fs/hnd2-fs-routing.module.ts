import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hnd2FsPage } from './hnd2-fs.page';

const routes: Routes = [
  {
    path: '',
    component: Hnd2FsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hnd2FsPageRoutingModule {}
