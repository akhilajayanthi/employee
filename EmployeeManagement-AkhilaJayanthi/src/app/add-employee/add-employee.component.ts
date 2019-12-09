import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  isValid:boolean=false;
  message:String='';
  password1:String='';
  password2:String='';
 empList:Employee[]=[];
  constructor(private _service:EmployeeService, private _router: Router) { }

  ngOnInit() {
  }

  //User definded method for adding employee details
  //return type is void
  addEmployee(formData){

    if(this.passwordValidator(formData))
     { 
    this._service.addEmployee(formData);
   this.isValid=true;
   this.message='Employee added';
   this._router.navigate(['']);
     }
     else{
       this.isValid=false;
       this.message='Employee not added';
     }
     }

  //user defined method to validate if the password and confirm password are same. 
  //return type is boolean
  passwordValidator(data){
        
      this.password1=data.value.pswd;
      this.password2=data.value.cpswd;
  //If password not entered
      if (this.password1 == '') 
      alert ("Please enter Password"); 
        
  // If confirm password not entered 
  else if (this.password2 == '') 
      alert ("Please enter confirm password"); 
        
  // If Not same return False.     
  else if (this.password1 != this.password2) { 
      alert ("\nPassword did not match: Please try again...") 
      return false; 
  } 

  // If same return True. 
  else{  
      return true; 
  } 

     }

}
