import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeService} from './employee.service'
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path:'home',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: AppComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'display-employee', component: DisplayEmployeeComponent},
  {path: 'app-update', component: UpdateComponent},
  {path: 'app-delete', component: DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[EmployeeService]
})
export class AppRoutingModule {}
 
 
