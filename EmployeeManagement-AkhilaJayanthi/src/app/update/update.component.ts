import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  isValid:boolean=false;
  message:String='';
 empList:Employee[]=[];
  constructor(private _service:EmployeeService) { }

  ngOnInit() {
  }
  updateEmployee(formData){

    this._service.updateEmployee(formData);
    this.isValid=true;
    this.message='Employee updated';
      }
    

}
