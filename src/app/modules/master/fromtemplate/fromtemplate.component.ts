import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromtemplate',
  templateUrl: './fromtemplate.component.html',
  styleUrls: ['./fromtemplate.component.scss']
})
export class FromtemplateComponent implements OnInit {

  firstname = new FormControl();
  lastname = new FormControl();
  showFirstname = '';
  showLastname = '';

  ngOnInit(): void {
  }

  AddData() {
    console.log(this.firstname.value)
    console.log(this.lastname.value)

    // Clear value
    this.showFirstname = this.firstname.value;
    this.showLastname = this.lastname.value;

    // Clear value
    this.firstname.setValue('')
    this.lastname.setValue('')


  }


}
