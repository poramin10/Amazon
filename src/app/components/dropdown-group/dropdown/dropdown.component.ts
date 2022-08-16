import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  // @Input() items:any = [];
  @Input() labelName = '';
  @Input() iconPath = '';
  @Input() datas!: Map<string, any>;
  @Output() selectedEvent = new EventEmitter();
  @Input() selectedValue?:any = '';
  @Input() placeholderDropdown = 'กรุณาเลือก Dropdown';

  @Input() control = new FormControl();

  ngOnInit(): void {
  }

  clickSelect(data:any){
    this.selectedValue = data.key;
    this.control.setValue(data.value)
  }

}
