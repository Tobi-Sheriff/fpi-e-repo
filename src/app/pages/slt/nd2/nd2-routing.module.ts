import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nd2Page } from './nd2.page';

const routes: Routes = [
  {
    path: '',
    component: Nd2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nd2PageRoutingModule {}
