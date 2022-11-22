import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nd2SsPage } from './nd2-ss.page';

const routes: Routes = [
  {
    path: '',
    component: Nd2SsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nd2SsPageRoutingModule {}
