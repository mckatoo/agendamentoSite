import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.styl']
})
export class AgendaComponent implements OnInit {
    calendarOptions: Options;
   displayEvent: any;
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    constructor(protected agendaService: AgendaService) { }
  
    ngOnInit() {
      this.agendaService.getEvents().subscribe(data => {
        this.calendarOptions = {
          editable: true,
          eventLimit: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
          events: data
        };
      });
    }
    clickButton(model: any) {
      this.displayEvent = model;
    }
    eventClick(model: any) {
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title,
          allDay: model.event.allDay
          // other params
        },
        duration: {}
      }
      this.displayEvent = model;
    }
    updateEvent(model: any) {
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title
          // other params
        },
        duration: {
          _data: model.duration._data
        }
      }
      this.displayEvent = model;
    }
  }
  