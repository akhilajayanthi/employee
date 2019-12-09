import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeService} from './employee.service'
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'display-employee', component: DisplayEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[EmployeeService]
})
export class AppRoutingModule {}
 
 
