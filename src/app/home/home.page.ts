import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
// import { FirestoreService } from '../services/department/firestore.service';
import { Observable } from 'rxjs';
import { Department } from '../models/app.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public departmentList: Observable<Department[]>;
  // readonly departmentList$ = this.firestoreService.getDepartmentList();

  constructor(
    // private firestoreService: FirestoreService,
    private data: DataService
  ) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ngOnInit() {
    // this.departmentList = this.firestoreService.getDepartmentList();
  }

}
