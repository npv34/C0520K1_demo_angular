import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor(private userService: UserService,
              private groupService: GroupService) { }

  ngOnInit(): void {
  }

}
