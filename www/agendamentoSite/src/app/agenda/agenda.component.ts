import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { AgendaService } from './agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.styl']
})
export class AgendaComponent implements OnInit, OnDestroy {

  dateObj = new Date();
  yearMonth = this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);

  data: any = [{
    title: 'All Day Event',
    start: this.yearMonth + '-01'
},
{
    title: 'Long Event',
    start: this.yearMonth + '-07',
    end: this.yearMonth + '-10'
},
{
    id: 999,
    title: 'Repeating Event',
    start: this.yearMonth + '-09T16:00:00'
},
{
    id: 999,
    title: 'Repeating Event',
    start: this.yearMonth + '-16T16:00:00'
},
{
    title: 'Conference',
    start: this.yearMonth + '-11',
    end: this.yearMonth + '-13'
},
{
    title: 'Meeting',
    start: this.yearMonth + '-12T10:30:00',
    end: this.yearMonth + '-12T12:30:00'
},
{
    title: 'Lunch',
    start: this.yearMonth + '-12T12:00:00'
},
{
    title: 'Meeting',
    start: this.yearMonth + '-12T14:30:00'
},
{
    title: 'Happy Hour',
    start: this.yearMonth + '-12T17:30:00'
},
{
    title: 'Dinner',
    start: this.yearMonth + '-12T20:00:00'
},
{
    title: 'Birthday Party',
    start: this.yearMonth + '-13T07:00:00'
},
{
    title: 'Click for Google',
    url: 'http://google.com/',
    start: this.yearMonth + '-28'
}];

  eventos: Observable<any[]>;
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
          left: 'prev,next,today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
      console.log(data);
      this.eventos = data;
    });
  }

    ngOnDestroy(): void {
      this.calendarOptions.events.unsubscribe();
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
    };
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
    };
    this.displayEvent = model;
  }

}
