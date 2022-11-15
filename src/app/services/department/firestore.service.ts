import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { Department } from '../../models/app.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) {}

  createDepartment(
    departmentName: string
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`departmentList/${id}`).set({
      id,
      departmentName
    });
  }

  // createParty(party: Partial<Party>) {
  //   const userId: string = this.auth.getUser().uid;
  //   const partyCollection = collection(
  //     this.firestore,
  //     `users/${userId}/party/`
  //   );
  //   return addDoc(partyCollection, party);
  // }

  getDepartmentList(): Observable<Department[]> {
    return this.firestore.collection<Department>(`departmentList`).valueChanges();
  }
  // getSongDetail(songId: string): Observable<Department> {
  //   return this.firestore.collection('songList').doc<Department>(songId).valueChanges();
  // }
  deleteDepartment(departmentId: string): Promise<void> {
    return this.firestore.doc(`departmentList/${departmentId}`).delete();
  }
  deleteFiles(filesCollectionId: string): Promise<void> {
    return this.firestore.doc(`filesCollection/${filesCollectionId}`).delete();
  }

}

