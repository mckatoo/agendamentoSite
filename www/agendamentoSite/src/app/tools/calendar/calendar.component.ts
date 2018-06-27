import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarModule } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.styl']
})
export class CalendarComponent implements OnInit {

    dateObj = new Date();
    yearMonth = this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);

    events = [{
        title: 'All Day Event',
        start: this.yearMonth + '-01',
        color: 'yellow !important'
    },
    {
        title: 'Long Event',
        start: this.yearMonth + '-07',
        end: this.yearMonth + '-10',
        color: 'red !important'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: this.yearMonth + '-09T16:00:00',
        color: 'blue !important'
    },
    {
        id: 999,
        title: 'Repeating Event',
        start: this.yearMonth + '-16T16:00:00',
        color: 'cyan !important'
    },
    {
        title: 'Conference',
        start: this.yearMonth + '-11',
        end: this.yearMonth + '-13',
        color: 'black !important'
    },
    {
        title: 'Meeting',
        start: this.yearMonth + '-12T10:30:00',
        end: this.yearMonth + '-12T12:30:00',
        color: 'purple !important'
    },
    {
        title: 'Lunch',
        start: this.yearMonth + '-12T12:00:00',
        color: 'orange !important'
    },
    {
        title: 'Meeting',
        start: this.yearMonth + '-12T14:30:00',
        color: 'pink !important'
    },
    {
        title: 'Happy Hour',
        start: this.yearMonth + '-12T17:30:00',
        color: 'orange !important'
    },
    {
        title: 'Dinner',
        start: this.yearMonth + '-12T20:00:00',
        color: 'brown !important'
    },
    {
        title: 'Birthday Party',
        start: this.yearMonth + '-13T07:00:00',
        color: 'pink !important'
    },
    {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: this.yearMonth + '-28',
        color: 'purple !important'
    }];

    calendarOptions: Options;
    @ViewChild(FullCalendarModule) ucCalendar: FullCalendarModule;
    constructor() { }
    ngOnInit() {
        // this.eventService.getEvents().subscribe(data => {
          this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay,listMonth'
            },
            selectable: true,
            // events: [],
            events: this.events
            };
        // });
    }
    clearEvents() {
        this.events = [];
    }
    loadEvents() {
        // this.eventService.getEvents().subscribe(data => {
        //   this.events = data;
        // });
    }

}
