import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hnd2SsPage } from './hnd2-ss.page';

const routes: Routes = [
  {
    path: '',
    component: Hnd2SsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hnd2SsPageRoutingModule {}
