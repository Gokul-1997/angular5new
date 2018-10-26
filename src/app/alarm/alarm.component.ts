import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AlarmService } from './alarm.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  constructor(private router:Router,private alarm:AlarmService) { }
user : any = {};
  ngOnInit() {

   this.alarm.alarmhistories().subscribe( res => {
    this.user = res;
       console.log(this.user)
   });
  
}
}
