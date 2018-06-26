import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import 'dhtmlx-scheduler';
import {} from '@types/dhtmlxscheduler';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl']
})
export class CalendarComponent implements OnInit {

  @ViewChild('scheduler_here') schedulerContainer: ElementRef;

    ngOnInit() {
        scheduler.init(this.schedulerContainer.nativeElement, new Date());
    }

}
