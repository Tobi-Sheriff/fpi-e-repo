import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Year2Page } from './year2.page';

const routes: Routes = [
  {
    path: '',
    component: Year2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Year2PageRoutingModule {}
