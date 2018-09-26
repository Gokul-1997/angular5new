import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http:HttpClient) { }


/*
  
userstatus() {
        return this.http.get('http://192.168.1.80:4300/users/index');
    }
*/


}
