import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
