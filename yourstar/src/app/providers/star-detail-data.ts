import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'})
export class StarDetailData {
  data: any;
  url: string = '';

  constructor(
    public http: HttpClient, 
    public user: UserData
  ) {}

  load(starId: string) : any{
    this.url = 'http://127.0.0.1:8000/stars/';
    this.url = this.url + starId;
    
    this.data = this.http.get(this.url);
    return this.data;    
  }
}
