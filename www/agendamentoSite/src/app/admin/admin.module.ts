import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarioComponent, AdminComponent]
})
export class AdminModule { }
