import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../iuser";
import {UserService} from "../../services/user.service";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  disable = true;
  text: string;
  p: number = 1;
  page_title = 'User list';
  statusHidden = false;
  filterUser: IUser[];
  users: IUser[] = []

  sizeImage = '100';
  constructor(private userService: UserService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.filterUser = this.users;
  }

  disableImage() {
    this.statusHidden = !this.statusHidden;
  }

  search(keyword) {
    this.filterUser = (keyword) ? this.userService.findUserByName(keyword) : this.users;
  }

  delete(index) {
    if (confirm('Are you sure?')) {
      this.users.splice(index,1);
      this.text = 'delete success!'
    }
  }

  addUser(data) {
    this.users.push(data)
  }

  disableUser() {
    this.disable = !this.disable;
  }

}
