//List of Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';  
import { MaterialModule } from './material.module';
import {MatTreeModule} from '@angular/material/tree';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//List Of Service
import { Global } from './global';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { ForgetService } from './forget/forget.service';
import { DashboardService } from './dashboard/dashboard.service';
import { RefreshtokenInterceptor } from './token/refreshtoken.interceptor';
import { AuthGuardService } from './token/auth-guard.service';
import { AlarmService } from './alarm/alarm.service';
import { AlertService } from './alert/alert.service';
import { AlarmReportService } from './alarm-report/alarm-report.service';
import { LogService } from './log/log.service';
import { NotificationService } from './notification/notification.service';
import { MachinePageService } from './machine-page/machine-page.service';
import { ShiftregisterService } from './shiftregister/shiftregister.service';

//List Of Component 
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestpageComponent } from './testpage/testpage.component';
import { ReportComponent } from './report/report.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlertComponent } from './alert/alert.component';
import { AlarmReportComponent } from './alarm-report/alarm-report.component';
import { LogComponent } from './log/log.component';
import { NotificationComponent } from './notification/notification.component';
import { MachinePageComponent } from './machine-page/machine-page.component';
import { ShiftregisterComponent } from './shiftregister/shiftregister.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    DashboardComponent,
    ReportComponent,
    FrontpageComponent,
    AlarmComponent,
    AlertComponent,
    AlarmReportComponent,
    LogComponent,
    NotificationComponent,
    MachinePageComponent,
    ShiftregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatTreeModule
  ],
  providers: [
    Global,
    LoginService,
    AppService,
    RegisterService,
    ForgetService,
    DashboardService,
    AuthGuardService,
    AlarmService,
    AlertService,
    LogService,
    NotificationService,
    MachinePageService,
    ShiftregisterService,
       { provide: HTTP_INTERCEPTORS,
                 useClass: RefreshtokenInterceptor,
                 multi: true }
  ],
  bootstrap: [AppComponent]
  })
export class AppModule { }
