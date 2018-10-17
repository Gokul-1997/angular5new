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
	

  constructor(private router:Router,private test:TestpageService) { }

  ngOnInit() {


 
  }




}
