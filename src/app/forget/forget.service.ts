import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForgetService {
constructor(public http:HttpClient) { }

forget_mail(data) {
        return this.http.post('http://192.168.1.107:5500/ideas/forget_password',{"idea":data});
    }
}
