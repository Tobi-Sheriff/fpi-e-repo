// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-nd1-ss',
//   templateUrl: './nd1-ss.page.html',
//   styleUrls: ['./nd1-ss.page.scss'],
// })
// export class Nd1SsPage implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }

import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface FILE {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-nd1-ss',
  templateUrl: './nd1-ss.page.html',
  styleUrls: ['./nd1-ss.page.scss'],
})

export class Nd1SsPage {
  ngFireUploadTask: AngularFireUploadTask;
  progressNum: Observable<number>;
  progressSnapshot: Observable<any>;
  fileUploadedPath: Observable<string>;

  files2020: Observable<FILE[]>;
  files2021: Observable<FILE[]>;
  files2022: Observable<FILE[]>;

  FileName: string;
  FileSize: number;

  // isImgUploading: boolean;
  // isImgUploaded: boolean;
  // isChecked: boolean;
  // isNotChecked: boolean;
  // value: boolean;

  private ngFirestoreCollection2020: AngularFirestoreCollection<FILE>;
  private ngFirestoreCollection2021: AngularFirestoreCollection<FILE>;
  private ngFirestoreCollection2022: AngularFirestoreCollection<FILE>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
  ) {
    // this.isImgUploading = true;
    // this.isImgUploaded = false;
    // this.value = true;

    this.ngFirestoreCollection2020 = angularFirestore.collection<FILE>('N/SLT/1/SS/2020');
    this.ngFirestoreCollection2021 = angularFirestore.collection<FILE>('N/SLT/1/SS/2021');
    this.ngFirestoreCollection2022 = angularFirestore.collection<FILE>('N/SLT/1/SS/2022');
    this.files2020 = this.ngFirestoreCollection2020.valueChanges();
    this.files2021 = this.ngFirestoreCollection2021.valueChanges();
    this.files2022 = this.ngFirestoreCollection2022.valueChanges();
  }

  // toggleDepartment(value: boolean){
  //   return (value ? this.isChecked : this.isNotChecked);
  // }

}
