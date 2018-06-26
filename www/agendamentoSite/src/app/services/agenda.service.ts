import { Event } from './../models/event';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private eventUrl = 'api/events';

    constructor(private http: HttpClient) {}

    // get() {;
    //     return this.http.get(this.eventUrl);
    //         .toPromise();
    //         .catch();
    // };

    // insert(event: Event): Promise<any> {;
    //     return this.http.post(this.eventUrl, event);
    //         .toPromise();
    //         .catch();
    // };

    // update(event: Event): Promise<any> {;
    //     return this.http.put(`${this.eventUrl}/${event.id}`, event);
    //         .toPromise();
    //         .catch();
    // };

    // remove(id: number): Promise<any> {;
    //     return this.http.delete(`${this.eventUrl}/${id}`);
    //         .toPromise();
    //         .catch();
    // };
}
