import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() labelName: string | undefined;
  @Input() placeholderInput: string | undefined;
  @Input() iconPath: string | undefined;
  @Input() typeInput:string = 'text';
  @Input() nameInput:string | undefined;
  @Input() idInput:string | undefined;
  // @Input() formControl:string | undefined;
  @Input() formControlName:string | undefined;
  @Input() control = new FormControl();
  @Input()dataValue : string = ''
  checkIcon : Boolean = true;



  constructor() { }

  ngOnInit(): void {
    this.checkEvent()
  }

  checkEvent(){
    // console.log('OK')
    if(this.dataValue != ''){
      console.log(this.dataValue)
      console.log('แสดง')
      // console.log(this.formControl)
      this.checkIcon = true;
    }else{
      console.log('ไม่แสดง')
      this.checkIcon = false;
    }
  }

  clearInput(){
    this.dataValue = '';
    this.checkEvent();
  }

}
