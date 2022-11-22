import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nd1FsPage } from './nd1-fs.page';

const routes: Routes = [
  {
    path: '',
    component: Nd1FsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nd1FsPageRoutingModule {}
