import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromtemplate',
  templateUrl: './fromtemplate.component.html',
  styleUrls: ['./fromtemplate.component.scss']
})
export class FromtemplateComponent implements OnInit {

  @ViewChild('input_firstname') input_firstname!:any;
  @ViewChild('input_lastname') input_lastname!:any;

  firstname = new FormControl();
  lastname = new FormControl();

  ngOnInit(): void {
  }

  AddData(){
    console.log(this.firstname.value)
    console.log(this.lastname.value)
    console.log('clear')
    this.firstname.setValue('');
    this.lastname.setValue('');

    this.input_firstname.clearInput();
    this.input_lastname.clearInput();
    // this.input_lastname.clearInput();
  }


}
