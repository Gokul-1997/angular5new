import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ForgetService } from './forget.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
forget : any = {};
data : any = {};
  constructor(private router:Router,private forgetservice:ForgetService) { }

  ngOnInit() {
  }

recover(){
this.forgetservice.forget_mail(this.forget).subscribe( res => {
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
   );

}
}