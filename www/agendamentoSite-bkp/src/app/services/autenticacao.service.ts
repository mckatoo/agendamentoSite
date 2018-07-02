import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  user: Observable<firebase.User>;

  constructor(afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }
}
