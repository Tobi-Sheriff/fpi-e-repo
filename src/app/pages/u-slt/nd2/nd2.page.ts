import { Component, OnInit } from '@angular/core';
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
  selector: 'app-nd2',
  templateUrl: './nd2.page.html',
  styleUrls: ['./nd2.page.scss'],
})
export class Nd2Page implements OnInit {
  ngFireUploadTask: AngularFireUploadTask;
  filesSLTND2FS: Observable<FILE[]>;
  filesSLTND2SS: Observable<FILE[]>;

  FileName: string;
  FileSize: number;

  isImgUploading: boolean;
  isImgUploaded: boolean;
  isChecked: boolean;
  isNotChecked: boolean;
  value: boolean;

  private ngFirestoreCollectionFS: AngularFirestoreCollection<FILE>;
  private ngFirestoreCollectionSS: AngularFirestoreCollection<FILE>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
  ) {
    this.isImgUploading = true;
    this.isImgUploaded = false;
    this.value = true;
    // this.isChecked = true;
    // this.isNotChecked = false;


    this.ngFirestoreCollectionFS = angularFirestore.collection<FILE>('filesCollectionSLTND2FS');
    this.ngFirestoreCollectionSS = angularFirestore.collection<FILE>('filesCollectionSSLTND2SS');
    this.filesSLTND2FS = this.ngFirestoreCollectionFS.valueChanges();
    this.filesSLTND2SS = this.ngFirestoreCollectionSS.valueChanges();
  }

  toggleDepartment(value: boolean){
    return (value ? this.isChecked : this.isNotChecked);
  }

  ngOnInit() {
  }
}

