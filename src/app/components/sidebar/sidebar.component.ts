import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  photo:any;
  iconHover:boolean = false;
  menuHover:string = ''
  menuActive:string = ''
  menuClick:string = ''
  checkClose:boolean = false;
  barMenu:any = [
    {
      nameMenu: 'master',
      nameTodo: 'master',
      subMenu: [
        {
          name: 'page1',
          url: 'http'
        },
        {
          name: 'page2',
          url: 'http'
        },
        {
          name: 'page3',
          url: 'http'
        },
      ]

    },
    {
      nameMenu: 'database',
      nameTodo: 'database',
      subMenu: [
        {
          name: 'page1',
          url: 'http'
        },
        {
          name: 'page2',
          url: 'http'
        },
      ]
    },
    {
      nameMenu: 'approval',
      nameTodo: 'Approval & Maintain',
      subMenu: [
        {
          name: 'page1',
          url: 'http'
        },
        {
          name: 'page2',
          url: 'http'
        },
        {
          name: 'page3',
          url: 'http'
        },
        {
          name: 'page4',
          url: 'http'
        },
        {
          name: 'page5',
          url: 'http'
        },
        {
          name: 'page6',
          url: 'http'
        },
        {
          name: 'page7',
          url: 'http'
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  click(menuActive:string) {
    if(this.checkClose == false){
      this.menuActive = '';
    }
    this.checkClose = false;
  }

  urlIcon(menu:string){
    return `url('/assets/icons/sidebar_${menu}.svg')`
  }
  urlIconHover(menu:string){
    return `url('/assets/icons/sidebar_${menu}_hover.svg')`
  }


  checkHover(menu:string){
    this.menuHover = menu
  }

  clearHover(){
    this.menuHover = ''
  }

  clickPage(menuClick:string){
    this.menuClick = menuClick;
    this.checkClose = true;
  }

  activePage(menuActive:string){
    // menuActive = 'master'
    this.menuActive = menuActive
    this.checkClose = true;
  }

  checkClick(){
    console.log("click")
  }

}
