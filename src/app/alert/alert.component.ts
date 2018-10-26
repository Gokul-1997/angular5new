import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private router:Router,private alert:AlertService) { }
alertres : any = {} 
  ngOnInit() {

   this.alert.alerthistorie().subscribe( res => {
    this.alertres = res;
       console.log(this.alertres)
   },

   );
  
  }

}
