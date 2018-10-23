import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
constructor(public http:HttpClient) { }
/*
userstatus() {
        return this.http.get('http://192.168.1.107:4002/users/new');
    }
*/
userregister(data) {
        return this.http.post('http://192.168.1.71:3050/api/v1/auth/register',data);
    }


}
