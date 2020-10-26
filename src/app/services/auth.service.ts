import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getUserLogin() {
    return JSON.parse(localStorage.getItem('userLogin'));
  }

  logout() {
    localStorage.removeItem('userLogin')
  }
}
