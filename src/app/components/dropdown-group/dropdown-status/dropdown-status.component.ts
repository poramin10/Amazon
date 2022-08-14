import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    // ! 0 InActive : 1 Active
    this.data.set('Active','Active');
    this.data.set('Inactive','Inactive');
  }

  /** Function สำหรับเลือกลูกค้าที่ต้องการลงทะเบียนเข้าตรวจ */
  selectedCustomerValue(value: any) {
    console.log("ได้รับ Data => ", value)
    console.log("statusData:", this.statusData.value)
    //this.increaseSecondState()
  }


}
