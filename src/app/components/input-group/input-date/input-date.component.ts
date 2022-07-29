import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent {

  @Input() labelName: string | undefined;
  @Input() placeholderInput: string | undefined;
  @Input() iconPath: string | undefined;
  @Input() typeInput:string = 'text';
  @Input() nameInput:string | undefined;
  @Input() idInput:string | undefined;
  // @Input() formControl:string | undefined;
  @Input() formControlName:string | undefined;
  @Input() control = new FormControl();
  dataValue : string = ''
  checkIcon : Boolean = true;


  constructor() { }

  ngOnInit(): void {
    console.log(this.control.value)

  }

  checkEvent(){

  }

  clearInput(){
    this.control.setValue(null);
  }

  checkDate(){
    console.log(this.control.value)
    // this.pipe.transform(this.control.value,)
  }



}
