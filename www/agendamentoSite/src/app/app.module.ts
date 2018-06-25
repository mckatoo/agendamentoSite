import { CalendarioComponent } from './admin/calendario/calendario.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CalendarModule } from 'angular-calendar';
import localePt from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    NgbModule.forRoot(),
    // CalendarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
