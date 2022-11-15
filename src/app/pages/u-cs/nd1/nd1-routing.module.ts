import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nd1Page } from './nd1.page';

const routes: Routes = [
  {
    path: '',
    component: Nd1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nd1PageRoutingModule {}
