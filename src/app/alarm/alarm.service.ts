import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Global } from '../global';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AlarmService {

  constructor(public http:HttpClient,public global:Global ) { }

alarmhistories() {
        return this.http.get('http://192.168.1.48:3007/api/v1/alarm_histories?tenant_id=8');
    }
     
}
