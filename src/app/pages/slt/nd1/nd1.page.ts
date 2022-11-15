// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-nd1',
//   templateUrl: './nd1.page.html',
//   styleUrls: ['./nd1.page.scss'],
// })
// export class Nd1Page implements OnInit {
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
  selector: 'app-nd1',
  templateUrl: './nd1.page.html',
  styleUrls: ['./nd1.page.scss'],
})

export class Nd1Page {

  ngFireUploadTaskFS: AngularFireUploadTask;
  ngFireUploadTaskSS: AngularFireUploadTask;

  progressNumFS: Observable<number>;
  progressNumSS: Observable<number>;

  progressSnapshotFS: Observable<any>;
  progressSnapshotSS: Observable<any>;

  fileUploadedPath: Observable<string>;

  files: Observable<FILE[]>;

  FileName: string;
  FileSize: number;

  isImgUploading: boolean;
  isImgUploaded: boolean;

  private ngFirestoreCollectionFS: AngularFirestoreCollection<FILE>;
  private ngFirestoreCollectionSS: AngularFirestoreCollection<FILE>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
  ) {
    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.ngFirestoreCollectionFS = angularFirestore.collection<FILE>('filesCollectionSLTND1FS');
    this.ngFirestoreCollectionSS = angularFirestore.collection<FILE>('filesCollectionSLTND1SS');
    // this.files = this.ngFirestoreCollectionFS.valueChanges();
    // this.files = this.ngFirestoreCollectionSS.valueChanges();
  }

  fileUploadFS(event: FileList) {

    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!')
      return;
    }

    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `filesStorage/SLT/ND1/FS/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTaskFS = this.angularFireStorage.upload(fileStoragePath, file);

    this.progressNumFS = this.ngFireUploadTaskFS.percentageChanges();
    this.progressSnapshotFS = this.ngFireUploadTaskFS.snapshotChanges().pipe(
      finalize(() => {
        this.fileUploadedPath = imageRef.getDownloadURL();

        this.fileUploadedPath.subscribe(resp=>{
          this.fileStorageFS({
            name: file.name,
            filepath: resp,
            size: this.FileSize
          });
          this.isImgUploading = false;
          this.isImgUploaded = true;
        },error => {
          console.log(error);
        })
      }),
      tap(snap => {
          this.FileSize = snap.totalBytes;
      })
    )
  }

  fileStorageFS(image: FILE) {
    const ImgId = this.angularFirestore.createId();

    this.ngFirestoreCollectionFS.doc(ImgId).set(image).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }




  fileUploadSS(event: FileList) {

    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!')
      return;
    }

    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `filesStorage/SLT/ND1/SS/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTaskSS = this.angularFireStorage.upload(fileStoragePath, file);

    this.progressNumSS = this.ngFireUploadTaskSS.percentageChanges();
    this.progressSnapshotSS = this.ngFireUploadTaskSS.snapshotChanges().pipe(
      finalize(() => {
        this.fileUploadedPath = imageRef.getDownloadURL();

        this.fileUploadedPath.subscribe(resp=>{
          this.fileStorageSS({
            name: file.name,
            filepath: resp,
            size: this.FileSize
          });
          this.isImgUploading = false;
          this.isImgUploaded = true;
        },error => {
          console.log(error);
        })
      }),
      tap(snap => {
          this.FileSize = snap.totalBytes;
      })
    )
  }

  fileStorageSS(image: FILE) {
    const ImgId = this.angularFirestore.createId();

    this.ngFirestoreCollectionSS.doc(ImgId).set(image).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }

}
