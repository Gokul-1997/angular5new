import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
forget : any = {};
  constructor() { }

  ngOnInit() {
  }

recover(){


	console.log(this.forget);
	alert('Mail Send Successfull');
}



}
