import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'})
export class StarListData {
  data: any;

  constructor(public http: HttpClient, public user: UserData) {}

  private url = 'http://127.0.0.1:8000/stars/';  // URL to web api

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http.get(this.url);
    }
  }

  processData(data: any) {
    this.data = data;
    return this.data;
  }

  getStarsData() {
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
