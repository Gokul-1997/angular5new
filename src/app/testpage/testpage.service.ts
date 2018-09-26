import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';





const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TestpageService {

  constructor(public http:HttpClient) { }



/*

tree(){
  return this.http.post('http://182.72.104.66:3050/details/attribute_name'
);
}*/


/*register(){
  return this.http.get('http://192.168.1.107:4002/users/new');
}
*/

register(){
  return this.http.get('http://192.168.1.79:4021/emails/admin_panel');
}


/*registerdelete(){
  return this.http.delete('http://192.168.1.80:4500/users/delete');
}
*/



}
