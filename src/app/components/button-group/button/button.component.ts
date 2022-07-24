import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  // ? : ชื่อปุ่ม
  @Input() buttonText: string | undefined;
  // ? : กำหนด icon ของปุ่ม
  @Input() iconPath: string | undefined;

  constructor() {}

  ngOnInit(): void {}

}
