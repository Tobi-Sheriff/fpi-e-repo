import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/department/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.page.html',
  styleUrls: ['./create-department.page.scss'],
})

export class CreateDepartmentPage implements OnInit {

  public createDepartmentForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createDepartmentForm = formBuilder.group({
      departmentName: ['', Validators.required],
    });
  }

  async createDepartment() {
    const loading = await this.loadingCtrl.create();

    const departmentName = this.createDepartmentForm.value.departmentName;

    this.firestoreService
      .createDepartment( departmentName )
      .then(
        () => {
          loading.dismiss().then(() => {
            this.router.navigateByUrl('');
          });
        },
        error => {
          loading.dismiss().then(() => {
            console.error(error);
          });
        }
      );

    return await loading.present();
  }

  ngOnInit() {
  }

}
