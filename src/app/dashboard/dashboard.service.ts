import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Global } from '../global';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http:HttpClient, public global:Global) { }


tokenuse() {
        return this.http.get(this.global.apiUrl+'usersetting?id=1');
    }


checkdashboard() {
        return this.http.get('http://192.168.1.48:3007/api/v1/machines/dashboard_live?tenant_id=8');
    }



}
