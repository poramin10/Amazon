import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Data {
  id: number;
  name: string;
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  data: Map<any, any> = new Map<string, any>();

  ngOnInit(): void {
    // this.data = [res]
    // this.data.set(this.dataDemo.name , this.dataDemo);
    // console.log(this.dataDemo.name)

    this.data.set('data1' , 'data1');
    this.data.set('data2' , 'data2');
    this.data.set('data3' , 'data3');
    this.data.set('data4' , 'data4');

  }

  /** Function สำหรับเลือกลูกค้าที่ต้องการลงทะเบียนเข้าตรวจ */
  selectedCustomerValue(value: any) {
    console.log("ได้รับ Data => ",value)
    //this.increaseSecondState()
  }

  check(){
    console.log('click')
  }






}
