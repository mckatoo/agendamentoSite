import { AgendaService } from './../../services/agenda.service';
import { Event } from './../../models/event';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import 'dhtmlx-scheduler';
import { } from 'dhtmlxscheduler';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl']
})
export class CalendarComponent implements OnInit {

  event: Event[] = [
    { id: "1", start_date: "2018-06-26 14:00", end_date: "2018-06-26 18:00", text: "Event 1" },
    { id: "2", start_date: "2018-06-26 16:00", end_date: "2018-06-26 17:00", text: "Event 2" },
  ]

  @ViewChild('agenda') schedulerContainer: ElementRef;

  constructor() { }

  ngOnInit() {
      scheduler.config.xml_date = '%Y-%m-%d %H:%i';


      scheduler.init(this.schedulerContainer.nativeElement, new Date());

      scheduler.parse(this.event, "json");

      // scheduler.attachEvent('onEventAdded', (id, ev) => {
      //     this.eventService.insert(this.serializeEvent(ev, true))
      //         .then((response) => {
      //             if (response.id !== id) {
      //                 scheduler.changeEventId(id, response.id);
      //             }
      //         });
      // });

      // scheduler.attachEvent('onEventChanged', (id, ev) => {
      //     this.eventService.update(this.serializeEvent(ev));
      // });

      // scheduler.attachEvent('onEventDeleted', (id) => {
      //     this.eventService.remove(id);
      // });

      // this.eventService.get()
      //     .then((data) => {
      //         scheduler.parse(data, 'json');
      //     });
  }

  private serializeEvent(data: any, insert: boolean = false): Event {
      const result = {};

      for (let i in data) {
          if (i.charAt(0) === '$' || i.charAt(0) === '_') {
              continue;
          }
          if (insert && i === 'id') {
              continue;
          }
          if (data[i] instanceof Date) {
              result[i] = scheduler.templates.xml_format(data[i]);
          } else {
              result[i] = data[i];
          }
      }
      return result as Event;
  }

}
