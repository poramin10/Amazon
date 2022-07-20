import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';


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

  ngOnInit(): void {
    console.log("Data: ",this.datas);
  }

  clickSelect(data:any){
    this.selectedValue = this.datas.get(data);
    this.selectedEvent.emit(data)
  }

}