import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: number = 0;
  username: FormControl;
  password: FormControl;
  myform: FormGroup;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.checkLogin();
  }

  createForm() {
    this.myform = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6)
      ])
    })
  }

  checkLogin() {
    if(localStorage.getItem('users')) {
      this.router.navigate(['/index']);
    }
  }

  onReset() {
    this.myform.reset();
  }

  onSubmitForm() {
    let username =  this.myform.value.username;
    let password =  this.myform.value.password;
    let users = {
      username : this.myform.value.username,
      password : this.myform.value.password
    }
    console.log(username,password);
    if(username == "admin" && password == "hoangtuannhan") {
      localStorage.setItem('users', JSON.stringify(users));
        this.router.navigate(['/courses/list']);
    } else {
      this.error = 1;
    }
  }  
}
