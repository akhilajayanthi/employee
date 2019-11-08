import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  empList:Employee[] = [
    {eid:101,ename:'Tom',salary:40000,gender:'male',mobile:9087654321,email:'tom@gmail.com',job:'finance'},
    {eid:102,ename:'Cathy',salary:20000,gender:'female',mobile:9087654321,email:'cathy@gmail.com',job:'admin'},
    {eid:103,ename:'Liya',salary:45000,gender:'female',mobile:9087654321,email:'liya@gmail.com',job:'development'},
    {eid:104,ename:'Lorren',salary:37000,gender:'male',mobile:9087654321,email:'lorren@gmail.com',job:'sales'},
  ];

  constructor() { }

  addEmployee(formData){
  
    this.empList.push(formData.value);
  }

  getAllEmployees():Employee[]{

    return this.empList;
  }

  updateEmployee(formData){

    for (let i = 0; i < this.empList.length; i++) {

      const emp = this.empList[i];

      if(formData.value.eid == emp.eid){

        this.empList[i]=formData.value;
      }
      
    }

  }

  deleteEmployee(formData){

    for (let i = 0; i < this.empList.length; i++) {

      const emp = this.empList[i];

      if(formData.value.eid == emp.eid){

        this.empList.splice(i,1);
      }
      
    }


  }

}
