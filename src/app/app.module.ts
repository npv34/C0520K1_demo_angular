import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MenuComponent } from './core/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from "ngx-pagination";
import { InputSearchComponent } from './component/input-search/input-search.component';
import { MessageComponent } from './component/message/message.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';
import { LoginComponent } from './core/login/login.component';
import {UsersModule} from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputSearchComponent,
    GroupListComponent,
    AppLayoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
