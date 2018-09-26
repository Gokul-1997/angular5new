import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import swal from 'sweetalert2'
/*
export interface User {
  user_name: string;
  email: string;
  password: string;
  phone_number: string;
}
*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register : any = {};
//reg : any;
//data:any;
user: any;
  constructor(private router:Router,private reg:RegisterService) { }

  ngOnInit() {
/*
  this.reg.userstatus().subscribe( res => {
    this.user = res;
       console.log(this.user)
   },

   );
*/


  }


registersave(){

  console.log(this.register);
  //this.data = {"user_name": this.user_name,"email": this.email,"password": this.password,"phone_number": this.phone_number}
 
   this.reg.userregister(this.register).subscribe( res => {
    this.user = res;
         if(this.user){
        swal  ("Registered!", "You Have Sucessfully Registered", "success");
        this.router.navigate(['']);
        }else{
          swal("Not Registered!", "Registration Failed" , "error");
        }
   this.register = {}
   },
   error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
   );



}




}
