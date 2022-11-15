import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDepartmentPageRoutingModule } from './create-department-routing.module';

import { CreateDepartmentPage } from './create-department.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateDepartmentPageRoutingModule
  ],
  declarations: [CreateDepartmentPage]
})
export class CreateDepartmentPageModule {}
