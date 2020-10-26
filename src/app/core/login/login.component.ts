import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    let data = this.loginForm.value;
    let userCurrent = this.userService.findUserByEmailAndPassword(data);
    if (userCurrent != -1) {
      window.localStorage.setItem('userLogin', JSON.stringify(userCurrent));
      this.router.navigate(['admin'])
    } else {
      this.router.navigate(['login'])
    }

  }


}
