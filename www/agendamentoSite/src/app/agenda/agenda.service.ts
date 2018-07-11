import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';

@Injectable()

export class AgendaService {
  data: Observable<any>;

  constructor(private db: AngularFirestore) {
  }

  public getEvents(): Observable<any> {
    this.data = this.db.collection('events').valueChanges();
    return of(this.data);
}
}
