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


  addItem() {
    if (this.defect.value == null || this.price.value == null || this.defect.value == '' || this.price.value == '') {

      console.log('data',this.defect.value);

      this.boolCheckClick = true;
      this.defect.setValue(null);
      this.price.setValue(null);
    } else {

      console.log('data',this.defect.value);

      if(this.dataDemo.length != 0){
        const dataOld = this.dataDemo[this.dataDemo.length - 1].defect;
        console.log(dataOld)
        if(dataOld < this.defect.value){
          this.dataDemo.push({
            "defect": this.defect.value,
            "price": this.price.value,
          })
          this.checkError = false;
        }else{
          this.checkError = true;
        }
      }else{
        this.dataDemo.push({
          "defect": this.defect.value,
          "price": this.price.value,
        })
        this.checkError = false;
      }
      this.defect.setValue(null);
      this.price.setValue(null);
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
