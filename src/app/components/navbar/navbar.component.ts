import { Component, Input, OnInit } from '@angular/core';
import { AppState } from 'src/app/app-state';
import * as data from '../sidebar/data.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pageNameMenu:string = 'MenuName';
  pageTitle:string = 'NotFound';

  barMenu: any = (data as any).default

  constructor(private appState: AppState) {
    this.appState.pageNameMenuAsObservable().subscribe((res) => {
      this.pageNameMenu = res;
    });
    this.appState.pageTitleAsObservable().subscribe((res) => {
      this.pageTitle = res;
    });
  }

  ngOnInit(): void {
    const urlBase = window.location.pathname
    // console.log(this.barMenu[0].subMenu)
    // var result = this.barMenu.filter((obj: { nameMenu: string; }) => obj.nameMenu == urlBase[1]);

    for(let i = 0 ; i <= this.barMenu.length ; i++){
      try{
        var result = this.barMenu[i].subMenu.filter((obj: { url: string; }) => obj.url == urlBase.substring(1));
        if (result != '') {
          this.pageNameMenu = this.barMenu[i].nameMenu
          this.pageTitle = result[0].name;
          break;
        }
      }catch (e){
        console.log('ไม่พบ')
      }
    }

    // console.log(urlBase)
    // var resultTitlePage = result[0].subMenu.filter((obj: { url: string; }) => obj.url == urlBase[2]);
    // console.log(resultTitlePage)

  }


}
