import { Injectable } from '@angular/core';

@Injectable()
export class Global {
  apiUrl:any;
  constructor() { 
this.apiUrl="http://192.168.1.71:3050/api/v1/";
//this.apiUrl="http://beena-api.insightmailer.com/"
  }

  
}