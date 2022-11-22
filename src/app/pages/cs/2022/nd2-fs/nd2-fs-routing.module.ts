import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nd2FsPage } from './nd2-fs.page';

const routes: Routes = [
  {
    path: '',
    component: Nd2FsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nd2FsPageRoutingModule {}
