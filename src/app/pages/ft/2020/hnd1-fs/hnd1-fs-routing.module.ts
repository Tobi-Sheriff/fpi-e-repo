import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hnd1FsPage } from './hnd1-fs.page';

const routes: Routes = [
  {
    path: '',
    component: Hnd1FsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hnd1FsPageRoutingModule {}
