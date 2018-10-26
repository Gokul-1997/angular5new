import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { MachinePageService } from './machine-page.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-machine-page',
  templateUrl: './machine-page.component.html',
  styleUrls: ['./machine-page.component.css']
})
export class MachinePageComponent implements OnInit {
machinestatus : any = [];
  constructor() { }

  ngOnInit() {

  	this.machinestatus = [{"id":4,"machine_name":"SBE/TC/BA/M-M123","machine_model":"LR30C","machine_serial_no":"BA/M-M123","tenant_id":8,"machine_type":"LMW","machine_ip":"192.168.1.146","unit":"Unit - 1","device_id":"SBE-Y008-0001"},{"id":5,"machine_name":"SBE/TC/BA/M-M124","machine_model":"LR30C","machine_serial_no":"BA/M-M124","tenant_id":8,"machine_type":"LMW","machine_ip":"192.168.1.147","unit":"Unit - 1","device_id":"SBE-Y008-0002"},{"id":6,"machine_name":"SBE/VMC/BA/M-M029","machine_model":"DNM500","machine_serial_no":"BA/M-M029","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.144","unit":"Unit - 1","device_id":"SBE-Y008-0003"},{"id":7,"machine_name":"SBE/VMC/BA/M-M028","machine_model":"DNM500","machine_serial_no":"BA/M-M028","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.143","unit":"Unit - 1","device_id":"SBE-Y008-0004"},{"id":8,"machine_name":"SBE/HMC/BA/M-M107","machine_model":"HC 500 II","machine_serial_no":"BA/M-M107","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.145","unit":"Unit - 2","device_id":"SBE-Y008-0005"},{"id":9,"machine_name":"SBE/VMC/BA/M-M108","machine_model":"i Series","machine_serial_no":"Fanuc","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.148","unit":"Unit - 2","device_id":"SBE-Y008-0016"},{"id":29,"machine_name":"SBE/TC/BA/M-M232","machine_model":"fanuc","machine_serial_no":"OI-MD","tenant_id":8,"machine_type":"Fanuc Rs3232","machine_ip":"192.168.1.303","unit":"Unit - 2","device_id":"SBE-Y008-0017"}]
  }

}
