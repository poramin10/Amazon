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
      console.log('data',this.defect.value);

      this.boolCheckClick = true;
      this.defect.setValue('');
      this.price.setValue('');
    } else {

      if(this.dataDemo.length != 0){
        const dataOld = this.dataDemo[this.dataDemo.length - 1].defect;
        if(dataOld < +this.defect.value){
          console.log('เข้า if')
          this.dataDemo.push({
            "defect": +this.defect.value,
            "price": +this.price.value,
          })
          this.checkError = false;
        }else{

          console.log('เข้า else')
          this.checkError = true;
        }
      }else{
        this.dataDemo.push({
          "defect": +this.defect.value,
          "price": +this.price.value,
        })
        this.checkError = false;
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
