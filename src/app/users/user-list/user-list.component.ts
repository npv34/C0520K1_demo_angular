import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  p: number = 1;
  page_title = 'User list';
  statusHidden = false;
  filterUser: IUser[];
  users: IUser[] = [
    {
      name: 'Nam',
      email: 'nam@gmail.com',
      group: 'C0520K1',
      avatar: 'https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
      role: 1,
    },
    {
      name: 'Duc',
      email: 'duc@gmail.com',
      group: 'C0520K1',
      avatar: 'https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg',
      role: 2,
    }
  ]

  sizeImage = '100';
  constructor() { }

  ngOnInit(): void {
    this.filterUser = this.users;
  }

  disableImage() {
    this.statusHidden = !this.statusHidden;
  }

  search(event) {
    let keyword = event.target.value;
    this.filterUser = (keyword) ? this.findUserByName(keyword) : this.users;
  }

  findUserByName(name: string) : IUser[]{
      let result: IUser[] = [];
      for(let user of this.users) {
        if (user.name.toLowerCase().includes(name.toLowerCase())) {
          result.push(user);
        }
      }
      return result;
  }

  delete(index) {
    if (confirm('Are you sure?')) {
      this.users.splice(index,1);
    }
  }


}
