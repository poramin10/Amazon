import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demopage1',
  templateUrl: './demopage1.component.html',
  styleUrls: ['./demopage1.component.scss']
})
export class Demopage1Component implements OnInit {

  dataDemo = [
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
    {
      "TransactionNo": "220601 - 001",
      "DocumentDate": "01/06/2022",
      "POContract": "4170001",
      "Round": "01",
      "Item": "1",
      "PurchasingPoint": "CMP",
    },
  ]

  totalData:number = 10;

  constructor() { }

  ngOnInit(): void {
    this.totalData = this.dataDemo.length;
  }

}
