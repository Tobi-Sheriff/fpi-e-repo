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
  selector: 'app-hnd1',
  templateUrl: './hnd1.page.html',
  styleUrls: ['./hnd1.page.scss'],
})
export class Hnd1Page implements OnInit {
  ngFireUploadTask: AngularFireUploadTask;
  filesFTHND1FS: Observable<FILE[]>;
  filesFTHND1SS: Observable<FILE[]>;

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


    this.ngFirestoreCollectionFS = angularFirestore.collection<FILE>('filesCollectionFTHND1FS');
    this.ngFirestoreCollectionSS = angularFirestore.collection<FILE>('filesCollectionFTHND1SS');
    this.filesFTHND1FS = this.ngFirestoreCollectionFS.valueChanges();
    this.filesFTHND1SS = this.ngFirestoreCollectionSS.valueChanges();
  }

  toggleDepartment(value: boolean){
    return (value ? this.isChecked : this.isNotChecked);
  }

  ngOnInit() {
  }
}
