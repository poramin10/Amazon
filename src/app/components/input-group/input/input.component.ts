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
  dataValue : string = ''
  checkIcon : Boolean = false
  @Input() nameFormControl:any = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  checkEvent(){
    console.log('OK')
    if(this.dataValue != ''){
      this.checkIcon = true;
    }else{
      this.checkIcon = false;
    }
  }

  clearInput(){
    this.dataValue = '';
    this.checkEvent();
  }

}
