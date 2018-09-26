import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {SelectionModel} from '@angular/cdk/collections';
//import {FlatTreeControl} from '@angular/cdk/tree';
//import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import { ViewService } from './view.service';

import swal from 'sweetalert2'



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
/*
 this.ViewService.trees().subscribe( res => {
     this.tree = res; 
     console.log(this.tree);
   },
   error => {
 //  this.password = '';
    swal("Oops!", "Login Failed", "error") 
   }
   );*/

  }



  }



