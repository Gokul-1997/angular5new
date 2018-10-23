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
send : any = {};
data : any = {};
dash : any = {};
  constructor(private router:Router,private dashboard:DashboardService) { }

  ngOnInit() {
    
  this.dashboard.tokenuse().subscribe( res => {
    this.dash = res;
       console.log(this.dash);
   },

   );

  
  }
  

sendmailsave(){





  
/*this.dashboard.sendmailtest(this.send).subscribe( res => {
    this.data = res;
         if(this.data){
        swal  ("Send!", "You Have Sucessfully Mail Send", "success");
        this.router.navigate(['dashboard']);
        }else{
          swal("Mail Not Send!", "Send Failed" , "error");
        }
      },

  error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
   );*/

}

}
