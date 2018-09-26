import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import swal from 'sweetalert2'


		
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login : any = {};
 user:any;


  constructor(private router:Router,private Login:LoginService) { }

  ngOnInit() {


     
                          
  }





loginsave(){
 

this.Login.userlogin(this.login).subscribe( res => {
    this.user = res;
         if(this.user){
        swal  ("Registered!", "You Have Sucessfully Registered", "success");
        this.router.navigate(['dashboard']);
        }else{
          swal("Not Registered!", "Registration Failed" , "error");
        }
   
   },
   error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
   );


}
}