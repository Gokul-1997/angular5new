import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register : any = {};
user: any;
tanent_data : any = {};
constructor(private router:Router,private reg:RegisterService) { }

ngOnInit() {
/*  this.reg.userstatus().subscribe( res => {
    this.user = res;
       console.log(this.user)
   },

   );
*/
  }
registersave(){
    var tanent_data={
        "tenant" :
    {
        "tenant_name":this.register.tenant_name,
        "address_line1":this.register.address_line1,
        "address_line2":this.register.address_line2,
        "city":this.register.city,
        "state":this.register.state,
        "country":this.register.country,
        "pincode": this.register.pincode,

        "roles_attributes":[{
              "role_name" : "CEO",
              "users_attributes": [{

        "first_name": this.register.first_name,
        "last_name": this.register.last_name,
        "email":this.register.email,
        "password":this.register.password,
        "phone_number":this.register.phone_number,
        "user_type_id": 2
            }]
        }]
    }

}

console.log(this.tanent_data);
         this.reg.userregister(tanent_data).subscribe( res => {
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
