import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GroupListComponent} from "./group-list/group-list.component";
import {HttpClientModule} from "@angular/common/http";
import { GroupEditComponent } from './group-edit/group-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UsersModule} from "../users/users.module";
import {MessageComponent} from "../component/message/message.component";

const routes: Routes = [
  {
    path: '', component: GroupListComponent
  },
  {
    path: ':id/edit', component: GroupEditComponent
  },
]

@NgModule({
  declarations: [
    GroupListComponent,
    GroupEditComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class GroupsModule { }
