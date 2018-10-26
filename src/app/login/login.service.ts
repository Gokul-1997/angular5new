import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Global } from '../global';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(public http:HttpClient,public global:Global ) { }

userlogin(data) {
        return this.http.post(this.global.apiUrl+'auth/login',data);
    }
     

}
