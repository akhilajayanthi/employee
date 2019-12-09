import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showWhen: boolean = false;
  empList: Employee[] = [];
  valid: boolean = false;

  constructor(private _router: Router, private _service: EmployeeService) { }

  ngOnInit() {
  }

  //Method to check if the given username and password are present
  //If present navigates to display page
  authenticateLogin(user) {

    this.valid = this._service.authenticateLogin(user);
    console.log(this.valid);

    if (this.valid == true) {

      console.log("log in successful")
      this._router.navigate(['display-employee']);

    }

    else {
      alert("Please enter valid username and password");
      console.error("Invalid email and password");
    }
  }

  //Navigates to add employee page
  register() {

    this._router.navigate(['add-employee']);
  }

}
