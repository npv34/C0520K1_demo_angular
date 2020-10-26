import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  userLogin;
  constructor() { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(localStorage.getItem('userLogin'));
    console.log(this.userLogin)
  }

}
