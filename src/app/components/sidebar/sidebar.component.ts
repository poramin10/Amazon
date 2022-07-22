import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { AppState } from 'src/app/app-state';
import { SideBarMenu } from 'src/app/interfaces/sidebarmenu';
import * as data from './data.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  photo: any;
  iconHover: boolean = false;
  menuHover: string = ''
  menuActive: string = ''
  menuClick: string = ''
  checkClose: boolean = false;
  clickPage: boolean = false;

  barMenu: any = (data as any).default

  constructor(private appState: AppState) {

  }

  ngOnInit(): void {
    const urlBase = window.location.href.split('/')
    this.menuActive = urlBase[3];
  }

  @HostListener('document:click', ['$event'])
  click() {
    if (this.checkClose == false) {
      console.log('ปิด')
      this.menuClick = '';
    }
    this.checkClose = false;
  }

  urlIcon(menu: string) {
    return `url('/assets/icons/${menu}.svg')`
  }
  urlIconHover(menu: string) {
    return `url('/assets/icons/${menu}.svg')`
  }


  checkHover(menu: string) {
    this.menuHover = menu
  }

  clearHover() {
    this.menuHover = ''
  }

  clickSidebar(menuClick: string) {
    this.menuClick = menuClick
    this.checkClose = true;
  }


  checkActiveSidebar(url: string, page: string , nameMenu:string) {
    this.appState.pageNameMenu.next(nameMenu)
    this.appState.pageTitle.next(page)
    const urlBase = url.split('/')
    this.menuActive = urlBase[0];
  }

}
