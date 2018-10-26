import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  send: any = {};
  data: any = {};
  check: any = {};
  clock:any;
  constructor(private router: Router, private dashboard: DashboardService) { }

  ngOnInit() {

   

    setInterval(() => {
      this.clock=new Date();
    }, 1000);

    this.check = { "data": { "Unit - 1": [{ "unit": "Unit - 1", "cycle_time": "00:00:47", "total_run_time": "00:53:28", "idle_time": "00:23:33", "total_stop_time": "00:00:00", "shift_no": 3, "day_start": "2018-10-25T16:00:06.000+05:30", "last_update": "2018-10-25T17:31:57.000+05:30", "machine_id": 4, "machine_name": "SBE/TC/BA/M-M123", "job_name": "9924-(FRONT CASE TUR 3RD OPN)", "parts_count": 8, "downtime": "00:23:33", "machine_status": 3, "utilization": 22, "controller_part": 503, "start_time": "2018-10-25T16:00:00.000+05:30" }, { "unit": "Unit - 1", "cycle_time": "00:08:39", "total_run_time": "01:15:22", "idle_time": "00:13:26", "total_stop_time": "00:00:00", "shift_no": 3, "day_start": "2018-10-25T16:00:01.000+05:30", "last_update": "2018-10-25T17:31:57.000+05:30", "machine_id": 5, "machine_name": "SBE/TC/BA/M-M124", "job_name": "1396-(A51394N-40 SFG-TU2)", "parts_count": 7, "downtime": "00:13:26", "machine_status": 3, "utilization": 31, "controller_part": 373, "start_time": "2018-10-25T16:00:00.000+05:30" }, { "unit": "Unit - 1", "cycle_time": "00:04:37", "total_run_time": "00:57:47", "idle_time": "00:15:40", "total_stop_time": "00:00:00", "shift_no": 3, "day_start": "2018-10-25T16:00:04.000+05:30", "last_update": "2018-10-25T17:32:16.000+05:30", "machine_id": 6, "machine_name": "SBE/VMC/BA/M-M029", "job_name": "5-(5T0001 ELBOW I OPN)", "parts_count": 15, "downtime": "00:15:40", "machine_status": 3, "utilization": 24, "controller_part": 105, "start_time": "2018-10-25T16:00:00.000+05:30" }, { "unit": "Unit - 1", "cycle_time": "00:00:42", "total_run_time": "00:26:19", "idle_time": "00:55:43", "total_stop_time": "00:00:00", "shift_no": 3, "day_start": "2018-10-25T16:00:01.000+05:30", "last_update": "2018-10-25T17:32:26.000+05:30", "machine_id": 7, "machine_name": "SBE/VMC/BA/M-M028", "job_name": "6852-(X68009046001-30 SFG-V1)", "parts_count": 18, "downtime": "00:55:43", "machine_status": 3, "utilization": 10, "controller_part": 337, "start_time": "2018-10-25T16:00:00.000+05:30" }], "Unit - 2": [{ "unit": "Unit - 2", "cycle_time": "00:00:00", "total_run_time": "00:00:00", "idle_time": "01:32:26", "total_stop_time": "00:00:00", "shift_no": 3, "day_start": "2018-10-25T16:00:00.000+05:30", "last_update": "2018-10-25T17:32:26.000+05:30", "machine_id": 8, "machine_name": "SBE/HMC/BA/M-M107", "job_name": "88-\n(17350117 IMPELLER CASE I OPN)", "parts_count": 0, "downtime": "01:32:26", "machine_status": 0, "utilization": 0, "controller_part": 7, "start_time": "2018-10-25T16:00:00.000+05:30" }, { "unit": "Unit - 2", "cycle_time": "00:13:57", "total_run_time": "01:25:53", "idle_time": "00:05:19", "total_stop_time": "00:00:00", "shift_no": 3, "day_start": "2018-10-25T16:00:04.000+05:30", "last_update": "2018-10-25T17:32:33.000+05:30", "machine_id": 9, "machine_name": "SBE/VMC/BA/M-M108", "job_name": "244-(R921180244-70TO90 SFG-V1-3)", "parts_count": 6, "downtime": "00:05:19", "machine_status": 3, "utilization": 35, "controller_part": 77, "start_time": "2018-10-25T16:00:00.000+05:30" }, { "unit": "Unit - 2", "cycle_time": "00:26:03", "total_run_time": "00:49:47", "idle_time": "00:40:43", "total_stop_time": "00:00:00", "shift_no": 3, "day_start": "2018-10-25T16:00:03.000+05:30", "last_update": "2018-10-25T17:32:34.000+05:30", "machine_id": 29, "machine_name": "SBE/TC/BA/M-M232", "job_name": "4522-W204521BASEIIOPN", "parts_count": 4, "downtime": "00:40:43", "machine_status": 1, "utilization": 20, "controller_part": 23, "start_time": "2018-10-25T16:00:00.000+05:30" }] }, "count": { "Unit - 1": { "running": 4 }, "Unit - 2": { "idle": 1, "running": 1, "idle1": 1 } } };
    //  this.dashboard.checkdashboard().subscribe( res => {

    //        console.log(this.check.data);



    //     /*   this.date = Date.now();
    //        console.log(this.date);*/
    //    });




  }


  sendmailsave() {


  }

}
