import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  isValid:boolean=false;
  message:String='';
 empList:Employee[]=[];
  constructor(private _service:EmployeeService) { }

  ngOnInit() {
     
    this.empList=this.getAllEmployees();
  }
  getAllEmployees():Employee[]{
 
    return this._service.getAllEmployees();
   
 }
}
