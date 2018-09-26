import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private dash:DashboardService) { }

  ngOnInit() {
   /* this.dash.userstatus().subscribe( res => {
    this.user = res;
       console.log(this.user)
   },

   );*/

  }


}
