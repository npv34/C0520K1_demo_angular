import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {GroupService} from "../../services/group.service";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  message = this.messageService.message
  groups = [];
  constructor(private userService: UserService,
              private groupService: GroupService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.groupService.getAllGroup().subscribe(res => {
      this.groups = res.data;
    })
  }

  delete(id) {
    if (confirm('are you sure?')) {
      this.groupService.delete(id).subscribe(res => {
        if (res.status == 'success') {
          this.getAll();
          this.message = res.message;
        }
      })
    }
  }

}
