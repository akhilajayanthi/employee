import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  isValid:boolean=false;
  message:String='';
 empList:Employee[]=[];
  constructor(private _service:EmployeeService) { }

  ngOnInit() {
  }
  addEmployee(formData){

    this._service.addEmployee(formData);
   this.isValid=true;
   this.message='Employee added';
     }

}
