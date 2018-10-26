import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
notificationstatus : any = [];
  constructor() { }

  ngOnInit() {
this.notificationstatus = [{"id":3,"alarm_for":"idle","time_interval":"5","alarm_type":null,"active":false,"machine":{"id":4,"machine_name":"SBE/TC/BA/M-M123","machine_model":"LR30C","machine_serial_no":"BA/M-M123","tenant_id":8,"machine_type":"LMW","machine_ip":"192.168.1.146","unit":"Unit - 1","device_id":"SBE-Y008-0001"}},{"id":4,"alarm_for":"stop","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":4,"machine_name":"SBE/TC/BA/M-M123","machine_model":"LR30C","machine_serial_no":"BA/M-M123","tenant_id":8,"machine_type":"LMW","machine_ip":"192.168.1.146","unit":"Unit - 1","device_id":"SBE-Y008-0001"}},{"id":5,"alarm_for":"idle","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":5,"machine_name":"SBE/TC/BA/M-M124","machine_model":"LR30C","machine_serial_no":"BA/M-M124","tenant_id":8,"machine_type":"LMW","machine_ip":"192.168.1.147","unit":"Unit - 1","device_id":"SBE-Y008-0002"}},{"id":6,"alarm_for":"stop","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":5,"machine_name":"SBE/TC/BA/M-M124","machine_model":"LR30C","machine_serial_no":"BA/M-M124","tenant_id":8,"machine_type":"LMW","machine_ip":"192.168.1.147","unit":"Unit - 1","device_id":"SBE-Y008-0002"}},{"id":7,"alarm_for":"idle","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":6,"machine_name":"SBE/VMC/BA/M-M029","machine_model":"DNM500","machine_serial_no":"BA/M-M029","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.144","unit":"Unit - 1","device_id":"SBE-Y008-0003"}},{"id":8,"alarm_for":"stop","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":6,"machine_name":"SBE/VMC/BA/M-M029","machine_model":"DNM500","machine_serial_no":"BA/M-M029","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.144","unit":"Unit - 1","device_id":"SBE-Y008-0003"}},{"id":9,"alarm_for":"idle","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":7,"machine_name":"SBE/VMC/BA/M-M028","machine_model":"DNM500","machine_serial_no":"BA/M-M028","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.143","unit":"Unit - 1","device_id":"SBE-Y008-0004"}},{"id":10,"alarm_for":"stop","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":7,"machine_name":"SBE/VMC/BA/M-M028","machine_model":"DNM500","machine_serial_no":"BA/M-M028","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.143","unit":"Unit - 1","device_id":"SBE-Y008-0004"}},{"id":11,"alarm_for":"idle","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":8,"machine_name":"SBE/HMC/BA/M-M107","machine_model":"HC 500 II","machine_serial_no":"BA/M-M107","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.145","unit":"Unit - 2","device_id":"SBE-Y008-0005"}},{"id":12,"alarm_for":"stop","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":8,"machine_name":"SBE/HMC/BA/M-M107","machine_model":"HC 500 II","machine_serial_no":"BA/M-M107","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.145","unit":"Unit - 2","device_id":"SBE-Y008-0005"}},{"id":13,"alarm_for":"idle","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":9,"machine_name":"SBE/VMC/BA/M-M108","machine_model":"i Series","machine_serial_no":"Fanuc","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.148","unit":"Unit - 2","device_id":"SBE-Y008-0016"}},{"id":14,"alarm_for":"stop","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":9,"machine_name":"SBE/VMC/BA/M-M108","machine_model":"i Series","machine_serial_no":"Fanuc","tenant_id":8,"machine_type":"DOOSAN","machine_ip":"192.168.1.148","unit":"Unit - 2","device_id":"SBE-Y008-0016"}},{"id":53,"alarm_for":"idle","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":29,"machine_name":"SBE/TC/BA/M-M232","machine_model":"fanuc","machine_serial_no":"OI-MD","tenant_id":8,"machine_type":"Fanuc Rs3232","machine_ip":"192.168.1.303","unit":"Unit - 2","device_id":"SBE-Y008-0017"}},{"id":54,"alarm_for":"stop","time_interval":null,"alarm_type":null,"active":null,"machine":{"id":29,"machine_name":"SBE/TC/BA/M-M232","machine_model":"fanuc","machine_serial_no":"OI-MD","tenant_id":8,"machine_type":"Fanuc Rs3232","machine_ip":"192.168.1.303","unit":"Unit - 2","device_id":"SBE-Y008-0017"}}]





  }





}
