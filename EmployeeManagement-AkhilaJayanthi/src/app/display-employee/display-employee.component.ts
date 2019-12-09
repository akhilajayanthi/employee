import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  isValid: boolean = false;
  message: String = '';
  empList: Employee[] = [];
  constructor(private _service: EmployeeService) { }

  ngOnInit() {
    this.empList = this.getAllEmployees();
  }

  //Method to get all employee details and is stored in employee list
  //Returns employee list
  getAllEmployees(): Employee[] {

    return this._service.getAllEmployees();

  }

  //Method to update the form data passed
  updateEmployee(formData) {

    this.isValid = this._service.updateEmployee(formData);

    if (this.isValid == true) {

      this.message = 'Employee updated';
      console.log('employee data updated');
      this.fetchData();

    }
    else {
      console.log('Data not updated due to an error...');
    }

  }

  //Method to delete data from the table
  deleteEmployee(formData) {
    this._service.deleteEmployee(formData);
    this.isValid = true;
    this.message = 'Employee deleted';
  }

  //Method to fetch data after an operation is done
  fetchData() {
    this.empList = this._service.getAllEmployees();

  }
}
