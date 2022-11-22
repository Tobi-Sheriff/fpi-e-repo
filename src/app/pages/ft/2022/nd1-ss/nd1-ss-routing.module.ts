import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nd1SsPage } from './nd1-ss.page';

const routes: Routes = [
  {
    path: '',
    component: Nd1SsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nd1SsPageRoutingModule {}
