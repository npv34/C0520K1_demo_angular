import { Injectable } from '@angular/core';
import {IUser} from "../users/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      name: 'Nam',
      email: 'nam@gmail.com',
      avatar: 'https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
      role: 1,
      group_id: 1
    },
    {
      name: 'Duc',
      email: 'duc@gmail.com',
      avatar: 'https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg',
      role: 2,
      group_id: 2
    }
  ]
  constructor() { }

  getAll(): IUser[] {
    return this.users;
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
}
