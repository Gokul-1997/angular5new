import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Global } from '../global';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AlertService {

  constructor(public http:HttpClient,public global:Global ) { }

alerthistorie() {
        return this.http.get( 'http://dp.yantra24x7.com/api/v1/alerts?tenant_id=210')
    }

}
