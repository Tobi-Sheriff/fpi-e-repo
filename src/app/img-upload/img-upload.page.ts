// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-img-upload',
//   templateUrl: './img-upload.page.html',
//   styleUrls: ['./img-upload.page.scss'],
// })
// export class ImgUploadPage implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { Auth, authState } from '@angular/fire/auth';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { initialize } from '@ionic/core';

// import { getStorage, ref, deleteObject  } from "firebase/storage";

export interface FILE {
  name: string;
  filepath: string;
  size: number;
}
export interface User {
  email: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.page.html',
  styleUrls: ['./img-upload.page.scss'],
})

export class ImgUploadPage {


  ngFireUploadTask: AngularFireUploadTask;

  progressNum: Observable<number>;

  progressSnapshot: Observable<any>;

  fileUploadedPath: Observable<string>;

  files: Observable<FILE[]>;
  userData: User;

  FileName: string;
  FileSize: number;
  url: string;

  isImgUploading: boolean;
  isImgUploaded: boolean;
  isAdmin: boolean;

  private ngFirestoreCollection: AngularFirestoreCollection<FILE>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage,
    // private readonly auth: Auth,
    private readonly auth: AuthenticationService,
    private readonly firestore: Firestore,
    private readonly route: ActivatedRoute,
  ) {
    this.isImgUploading = true;
    this.isImgUploaded = false;
    // this.isAdmin = true;

    this.ngFirestoreCollection = angularFirestore.collection<FILE>('filesCollection');
    this.files = this.ngFirestoreCollection.valueChanges();
  }

  // delete(downloadUrl) {
  //   // const fileStoragePath = `filesStorage/${downloadUrl}`;
  //   // return this.angularFireStorage.refFromURL(fileStoragePath).delete();
  //   deleteObject(downloadUrl).then(() => {
  //     // File deleted successfully
  //     console.log("file deleted");

  //   }).catch((error) => {
  //     // Uh-oh, an error occurred!
  //     console.log("Oh no an error occured");

  //   });

  // }


  fileUpload(event: FileList) {

    const file = event.item(0)

    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!')
      return;
    }

    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `filesStorage/CS/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);

    this.progressNum = this.ngFireUploadTask.percentageChanges();
    this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(

      finalize(() => {
        this.fileUploadedPath = imageRef.getDownloadURL();

        this.fileUploadedPath.subscribe(resp=>{
          this.fileStorage({
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

    // const storage = getStorage();

    // // Create a reference under which you want to list
    // const listRef = ref(storage, 'files');

    // // Find all the prefixes and items.
    // listAll(listRef)
    //   .then((res) => {
    //     res.prefixes.forEach((folderRef) => {
    //     // All the prefixes under listRef.
    //     // You may call listAll() recursively on them.
    //   });
    //   // res.items.forEach((itemRef) => {
    //   //   // All the items under listRef.
    //   // });
    //   }).catch((error) => {
    //     // Uh-oh, an error occurred!
    //   });

    // const storage = getStorage();

    // Create a reference to the file to delete
    // const desertRef = ref(storage, 'images/desert.jpg');

    // Delete the file
    // deleteObject(desertRef).then(() => {
    //   // File deleted successfully
    // }).catch((error) => {
    //   // Uh-oh, an error occurred!
    // });

  }

  fileStorage(image: FILE) {
    const ImgId = this.angularFirestore.createId();

    this.ngFirestoreCollection.doc(ImgId).set(image).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }

  // ngOnInit() {
    // authState((user: { uid: any; }) => {
    //   if (this.url) {
    //     const userReference = doc(
    //       this.firestore,
    //       `userProfile/${user.uid}`
    //     );
    //     docData(userReference).subscribe(userObject => {
    //       this.isAdmin = userObject.isAdmin;
    //     })
    //   }
    // })
    // We're using Angular's ActivatedRoute to get the PartyId from the URL.
    // const adminId: string = this.route.snapshot.paramMap.get('adminId');
    // We're passing the partId to the initialize party function
    // this.initializeAdmin(adminId);
  // }
  // initializeAdmin(adminId) {
    // if (adminId == 'g5QofUXUh21gL52Fusc4') {
      // const userReference = doc(
      //   this.firestore,
      //   `userProfile/${adminId}`
      // );
      // this.isAdmin = true;
      // docData(userReference).subscribe(userObject => {
      //   this.isAdmin = userObject.isAdmin;
      // })


      // const userId: string = this.auth.getUser().uid;
      // return this.auth.getUser$().pipe(
      //   map(({ isAdmin: userId }: User) =>
      //     collection(this.firestore, `users/${userId}/party` )
      //   ),
      //   switchMap(partyCollection => collectionData(partyCollection, { idField: 'id' }))
      // );
    // }
  // }

}
