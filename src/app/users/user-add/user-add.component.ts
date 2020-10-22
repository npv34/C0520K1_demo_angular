import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Output() data = new EventEmitter();
  name: string = '';
  email: string = '';
  group: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    let user = {
      name: this.name,
      email: this.email,
      group: this.group,
    }

    this.data.emit(user)
  }

}
