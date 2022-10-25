import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Year1Page } from './year1.page';

const routes: Routes = [
  {
    path: '',
    component: Year1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Year1PageRoutingModule {}
