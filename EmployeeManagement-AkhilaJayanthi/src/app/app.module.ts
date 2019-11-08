import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent,
    DeleteComponent,
    UpdateComponent
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
