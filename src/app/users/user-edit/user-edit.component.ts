import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id = this.router.snapshot.paramMap.get('id');
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.id)
  }

}
