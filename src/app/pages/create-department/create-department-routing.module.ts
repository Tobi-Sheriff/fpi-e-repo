import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDepartmentPage } from './create-department.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDepartmentPageRoutingModule {}
