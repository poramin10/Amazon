import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {

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

  // Set สีของ Border
  checkInputFocus : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // ! Clear Input
  clearInput(){
    console.log('Test')
    this.control.setValue('');
  }

  // ! Check Focus Border
  focus(){
    this.checkInputFocus = true;
  }
  focuslost(){
    this.checkInputFocus = false;
  }

}
