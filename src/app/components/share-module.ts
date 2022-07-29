import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button-group/button/button.component';
import { InputComponent } from './input-group/input/input.component';
import { DropdownComponent } from './dropdown-group/dropdown/dropdown.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputDateComponent } from './input-group/input-date/input-date.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    DropdownComponent,
    SidebarComponent,
    NavbarComponent,
    InputDateComponent
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    DropdownComponent,
    SidebarComponent,
    NavbarComponent,
    InputDateComponent
  ],

})
export class SharedModule {}
