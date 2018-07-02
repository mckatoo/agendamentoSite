import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FullCalendarModule
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
