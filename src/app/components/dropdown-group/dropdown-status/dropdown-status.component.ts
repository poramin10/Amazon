import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-status',
  templateUrl: './dropdown-status.component.html',
  styleUrls: ['./dropdown-status.component.scss']
})
export class DropdownStatusComponent implements OnInit {

  selectedData: any = '';
  data: Map<any, any> = new Map<string, any>();
  @Input() statusData = new FormControl();
  @Output() selectedEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    // ! 0 InActive : 1 Active
    // TODO เปลี่ยนเป็น True false
    this.data.set('Active',true);
    this.data.set('Inactive',false);

    this.selectedData = this.isCheckValueStatus();
  }

  isCheckValueStatus(){
    if(this.statusData.value == null){
      return null;
    }else{
      return this.statusData.value ? "Active" : "Inactive";
    }
  }

}
