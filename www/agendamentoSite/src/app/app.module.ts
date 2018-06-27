import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CalendarComponent } from './tools/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
