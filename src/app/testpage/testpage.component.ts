import { Component, OnInit, Inject, HostListener,Renderer2 , ElementRef } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { TestpageService } from './testpage.service';


@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
	res: any[];
  selectvalue:any = [];

  constructor(private router:Router,private test:TestpageService) { }

  ngOnInit() {


    this.test.register().subscribe( res => {
    this.user = res;
   console.log(this.user)
},

   );
 
  }

name2: any;

  keyvalue(s,data){
     alert(data.id);
    var index = this.selectvalue.indexOf(data);
 if(index === -1){
   this.selectvalue.push(data);
   this.name2 = true;
 }else{
   this.selectvalue.push(data)
   this.name2 = true;

   console.log(this.name2);
   //this.selectvalue.splice(index,1);
 }
    console.log(this.selectvalue);

}



test(g){
/*
alert(g);
}*/



  }
}

/*registersave(){
*/
/*
console.log(this.res);
}

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



}*/


