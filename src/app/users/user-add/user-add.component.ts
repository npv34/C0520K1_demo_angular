import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupService} from "../../services/group.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  groups = [];

  newUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private groupService: GroupService,
              private userService: UserService,
              private route: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        name: ['',[Validators.required, Validators.minLength(6)]],
        email: ['',[Validators.required,Validators.email]],
        group_id: ['',[Validators.required]],
        avatar: ['', [Validators.required]],
        fileSource: ['']
      }
    )
    this.groups = this.groupService.getAll();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newUserForm.patchValue({
        fileSource: file
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.newUserForm.get('fileSource').value);
    let data = this.newUserForm.value;
    console.log(this.newUserForm)
    this.userService.add(data);
    this.route.navigate(['users'])
  }

}
