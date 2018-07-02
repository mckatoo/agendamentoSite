import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  getAll() {
    this.items = this.db.collection('agendamento').valueChanges();
  }
}
