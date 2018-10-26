import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AlarmReportService } from './alarm-report.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-alarm-report',
  templateUrl: './alarm-report.component.html',
  styleUrls: ['./alarm-report.component.css']
})
export class AlarmReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
