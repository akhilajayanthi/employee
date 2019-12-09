import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Employee list
  empList: Employee[] = [
    { fname: 'Akhila', mname: '', lname: 'jayanthi', email: 'akhila@gmail.com', mobile: 9087654321, password: 'finance' },
    { fname: 'watson', mname: '', lname: 'Cathy', email: 'cathy@gmail.com', mobile: 9087654321, password: 'finance' },
    { fname: 'langford', mname: '', lname: 'Liya', email: 'liya@gmail.com', mobile: 9087654321, password: 'development' },
    { fname: 'downey', mname: 'lucy', lname: 'Lorren', email: 'lorren@gmail.com', mobile: 9087654321, password: 'sales' },
  ];

  constructor() { }

  //Method to check given email and password with data in employee list 
  //Return type is boolean
  authenticateLogin(formData) {

    for (let i = 0; i < this.empList.length; i++) {
      const emp = this.empList[i];
      console.log(formData.value.username);
      console.log(formData.value.password);
      console.log(emp.email);
      if (formData.value.username == emp.email) {
        if (formData.value.password == emp.password) {
          console.log('match found');
          return true;
        }
      }
      else {
        console.log('match not found');
      }

    }


  }

  //Method to add employee details to list
  addEmployee(formData) {

    this.empList.push(formData.value);
    console.log('employee added');
  }

  //Returns employee list
  getAllEmployees(): Employee[] {

    return this.empList;
  }

  //Method to update the employee details if email matches
  //Return type is boolean
  updateEmployee(formData) {

    for (let i = 0; i < this.empList.length; i++) {
      const emp = this.empList[i];
      if (formData.value.email == emp.email) {
        
        this.empList[i] = formData.value;
        return true;
      }

    }

  }

  //Method to delete details based on email
  //Return type is boolean
  deleteEmployee(email) {

    console.log(email);
    for (let i = 0; i < this.empList.length; i++) {

      const emp = this.empList[i];

      if (email == emp.email) {

        console.log('deleted');
        this.empList.splice(i, 1);
      }

    }


  }

}
