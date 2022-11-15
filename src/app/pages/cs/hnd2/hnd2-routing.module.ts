import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hnd2Page } from './hnd2.page';

const routes: Routes = [
  {
    path: '',
    component: Hnd2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hnd2PageRoutingModule {}
