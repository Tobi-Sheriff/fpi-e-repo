import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


export interface FILE {
  name: string;
  filepath: string;
  size: number;
}


@Component({
  selector: 'app-year1',
  templateUrl: './year1.page.html',
  styleUrls: ['./year1.page.scss'],
})
export class Year1Page implements OnInit {
  filesCS: Observable<FILE[]>;

  private ngFirestoreCollectionCS: AngularFirestoreCollection<FILE>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage
  ) {
    this.ngFirestoreCollectionCS = angularFirestore.collection<FILE>('filesCollectionCS');
    this.filesCS = this.ngFirestoreCollectionCS.valueChanges();
  }

  ngOnInit() {
  }

}
