import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AgendaComponent } from './agenda/agenda.component';

import { FullCalendarModule } from 'ng-fullcalendar';
import { AgendaService } from './agenda/agenda.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
