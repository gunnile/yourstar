import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class EventData {
  data: any;

  constructor(public http: HttpClient, public user: UserData) {}

  private eventUrl = 'http://127.0.0.1:8000/events/';  // URL to web api

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http.get(this.eventUrl);
    }
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking events to sessions
    this.data = data;

    return this.data;
  }

  getEventsData() {
    return this.load().pipe(
      map((data: any) => {
        return data.sort((a: any, b: any) => {
          const aName = a.name.split(' ').pop();
          const bName = b.name.split(' ').pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }
}
