import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

/*
trees() {
        return this.http.get('http://182.72.104.66:3050/users');
    }
*/


userlogin(data) {
        return this.http.post('http://192.168.1.80:4300/users/login',{"user":data});
    }
    

}
