import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  newUserForm: FormGroup;
  @Output() data = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        name: ['',[Validators.required, Validators.minLength(6)]],
        email: ['',[Validators.required,Validators.email]],
        group: ['',[Validators.required]],
      }
    )
  }

  onSubmit() {
    this.data.emit(this.newUserForm.value);
  }

}
