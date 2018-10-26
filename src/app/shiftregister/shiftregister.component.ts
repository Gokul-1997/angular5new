import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ShiftregisterService } from './shiftregister.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-shiftregister',
  templateUrl: './shiftregister.component.html',
  styleUrls: ['./shiftregister.component.css']
})
export class ShiftregisterComponent implements OnInit {
machineregister : any = [];
  constructor() { }

  ngOnInit() {
  	this.machineregister = [{"id":3,"start_noon":"AM","end_noon":"PM","shift_start_time":"07:30AM","shift_end_time":"12:00PM","actual_working_hours":"04:30:00","shift_no":1,"shift_start_time_dummy":"2000-01-01T02:00:00.000Z","shift_end_time_dummy":"2000-01-01T06:30:00.000Z","actual_working_hours_dummy":null},{"id":4,"start_noon":"PM","end_noon":"PM","shift_start_time":"12:00PM","shift_end_time":"04:00PM","actual_working_hours":"04:00:00","shift_no":2,"shift_start_time_dummy":"2000-01-01T06:30:00.000Z","shift_end_time_dummy":"2000-01-01T10:30:00.000Z","actual_working_hours_dummy":null},{"id":5,"start_noon":"PM","end_noon":"PM","shift_start_time":"04:00PM","shift_end_time":"08:00PM","actual_working_hours":"04:00:00","shift_no":3,"shift_start_time_dummy":"2000-01-01T10:30:00.000Z","shift_end_time_dummy":"2000-01-01T14:30:00.000Z","actual_working_hours_dummy":null},{"id":6,"start_noon":"PM","end_noon":"AM","shift_start_time":"08:00PM","shift_end_time":"12:00AM","actual_working_hours":"04:00:00","shift_no":4,"shift_start_time_dummy":"2000-01-01T14:30:00.000Z","shift_end_time_dummy":"2000-01-01T18:30:00.000Z","actual_working_hours_dummy":null},{"id":7,"start_noon":"AM","end_noon":"AM","shift_start_time":"12:00AM","shift_end_time":"04:00AM","actual_working_hours":"04:00:00","shift_no":5,"shift_start_time_dummy":"2000-01-01T18:30:00.000Z","shift_end_time_dummy":"2000-01-01T22:30:00.000Z","actual_working_hours_dummy":null},{"id":8,"start_noon":"AM","end_noon":"AM","shift_start_time":"04:00AM","shift_end_time":"07:30AM","actual_working_hours":"03:30:00","shift_no":6,"shift_start_time_dummy":"2000-01-01T22:30:00.000Z","shift_end_time_dummy":"2000-01-01T02:00:00.000Z","actual_working_hours_dummy":null}]
  }

}
