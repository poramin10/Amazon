import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  dataDemo: any = []
  boolCheckClick:boolean = false;
  checkError:boolean = false;

  defect = new FormControl();
  price = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  // ! ใส่บวกไว้หน้าตัวเลขเพื่อแปลง Text ตัวเลขที่เป็น String ให้เป็น Number เช่น +this.defect.value
  addItem() {
    if (this.defect.value == null || this.price.value == null || this.defect.value == '' || this.price.value == '') {
      this.boolCheckClick = true;
      this.defect.setValue('');
      this.price.setValue('');
    } else {

      if(this.dataDemo.length != 0){
        const dataOld = this.dataDemo[this.dataDemo.length - 1].defect;
        console.log(this.defect.value)
        if(dataOld < + this.defect.value && this.defect.value >= 0){
          this.dataDemo.push({
            "defect": +this.defect.value,
            "price": +this.price.value,
          })
          this.checkError = false;
        }else{
          this.checkError = true;
        }
      }else{
        if(this.defect.value >= 0){
          this.dataDemo.push({
            "defect": +this.defect.value,
            "price": +this.price.value,
          })
          this.checkError = false;
        }else{
          this.checkError = true;
        }
      }
      this.defect.setValue('');
      this.price.setValue('');
    }
  }

  deleteItem(){
    if(this.boolCheckClick == true){
      this.boolCheckClick = false;
    }else{
      this.dataDemo.pop()
    }
  }

}
