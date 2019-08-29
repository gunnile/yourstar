
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserData } from './user-data';

export class Api{
    url = '';
    base_url = 'http://localhost:8000/';

    user = 'users';

    access_token = '';
    
    constructor(
        public http: HttpClient

    ){}

    resetUrl(){
        this.url = '';
    }

    postUser(){
        this.resetUrl();

        this.url = this.base_url + this.user;

        this.http.post(this.url, {'access_token': this.access_token});

    }

    getUser(){
        this.resetUrl();

        this.url = this.base_url + this.user;

        let params = new HttpParams();

        params =  params.append('access_token', this.access_token);

        return this.http.get<UserData>(this.url, {params: params});
    }
}

