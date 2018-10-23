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
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { ForgetService } from './forget/forget.service';
import { DashboardService } from './dashboard/dashboard.service';
import { TestpageService } from './testpage/testpage.service';
import { RefreshtokenInterceptor } from './token/refreshtoken.interceptor';
import { AuthGuardService } from './token/auth-guard.service';




//List Of Component 
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestpageComponent } from './testpage/testpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    DashboardComponent,
    TestpageComponent
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
    LoginService,
    AppService,
    RegisterService,
    ForgetService,
    DashboardService,
    TestpageService,
    AuthGuardService,
       { provide: HTTP_INTERCEPTORS,
                 useClass: RefreshtokenInterceptor,
                 multi: true }
  ],
  bootstrap: [AppComponent]
  })
export class AppModule { }
