import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hnd1Page } from './hnd1.page';

const routes: Routes = [
  {
    path: '',
    component: Hnd1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hnd1PageRoutingModule {}
