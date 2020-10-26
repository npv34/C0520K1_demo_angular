import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups = [{
    id: 1,
    name: 'C0520K1'
  },
    {
      id: 2,
      name: 'C0520G1'
    },
  ]

  constructor() {
  }

  getAll() {
    return this.groups;
  }
}
