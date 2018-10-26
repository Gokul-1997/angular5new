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
 token : any = {};
 constructor(private router:Router,private Login:LoginService) { }
 ngOnInit() {
  
}
//console.log(this.user);
loginsave(){
  this.Login.userlogin(this.login).subscribe( res => {
  this.user = res;
  //alert(this.user.user.user_type_id);
  console.log(this.user.user.user_type_id);
  if(this.user.user.user_type_id == 1){
    localStorage.setItem("name",this.user.access_token);
    localStorage.setItem("usertype_id", this.user.usertype_id);
    swal ("Login!", "Login Sucessfull", "success");
    this.router.navigate(['forget']);
  }else if(this.user.user.user_type_id == 2){
    localStorage.setItem("name",this.user.access_token);
    localStorage.setItem("usertype_id",this.user.usertype_id);
    swal ("Login!", "Login Sucessfull", "success");
    this.router.navigate(['dashboard']);  
  }
});

}
}