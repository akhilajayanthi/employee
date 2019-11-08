import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  isValid:boolean=false;
  message:String='';
 empList:Employee[]=[];
  constructor(private _service:EmployeeService) { }

  ngOnInit() {
  }
  deleteEmployee(formData){
    this._service.deleteEmployee(formData);
    this.isValid=true;
    this.message='Employee deleted';
  }

}
