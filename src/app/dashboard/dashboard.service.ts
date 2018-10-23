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


sendmailtest(data) {
        return this.http.post('http://192.168.1.107:5500/ideas/send_now',{"idea":data});
    }


  
tokenuse() {
        return this.http.get('http://192.168.1.71:3050/api/v1/usersetting?id=1');
    }


}
