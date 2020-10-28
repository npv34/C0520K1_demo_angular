import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GroupService} from "../../services/group.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  editGroupForm: FormGroup;
  group;
  id = +this.router.snapshot.paramMap.get('id');
  constructor(private router: ActivatedRoute,
              private groupService: GroupService,
              private fb: FormBuilder,
              private route: Router,
              private messageService: MessageService
        ) { }

  ngOnInit(): void {
    this.editGroupForm = this.fb.group({
      name: ['']
    })

    this.groupService.findById(this.id).subscribe(res => {
      if (res.status == 'success') {
        this.editGroupForm.patchValue({
          name: res.data.name
        })
      }
    })
  }

  submit() {
    let data = this.editGroupForm.value;
    this.groupService.update(data, this.id).subscribe(res => {
      if (res.status == 'success') {
        this.messageService.setMessage(res.message)
        this.route.navigate(['admin/groups'])
      }
    })
  }
}
