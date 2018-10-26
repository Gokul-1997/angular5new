import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlertComponent } from './alert/alert.component';
import { AlarmReportComponent } from './alarm-report/alarm-report.component';
import { LogComponent } from './log/log.component';
import { NotificationComponent } from './notification/notification.component';
import { MachinePageComponent } from './machine-page/machine-page.component';
import { ShiftregisterComponent } from './shiftregister/shiftregister.component';


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path :'forget',component : ForgetComponent},
  {path:'dashboard',component : DashboardComponent},
  {path :'report', component : ReportComponent},
  {path : 'frontpage',component : FrontpageComponent},
  {path : 'alarm',component : AlarmComponent},
  {path : 'alert',component : AlertComponent },
  {path : 'alarmreport',component : AlarmReportComponent},
  {path : 'log',component : LogComponent},
  {path : 'notification', component : NotificationComponent},
  {path : 'machinepage', component : MachinePageComponent},
  {path : 'shiftregister',component : ShiftregisterComponent }



];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
