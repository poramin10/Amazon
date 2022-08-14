import { Component, OnInit } from '@angular/core';
import { AppState } from './app-state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  checkLogin:any = '';

  constructor(
    private appState: AppState,
    private router: Router
  ){
    this.appState.JwtCheckAsObservable().subscribe((res) => {
      this.checkLogin = res;
      this.isLogin();
    });
  }

  ngOnInit(): void {
    this.appState.JwtCheck.subscribe();
    this.checkLogin = this.isLogin()
  }

  title = 'amazon';

  // TODO Login แล้วสถานะเป็น True
  isLogin():boolean{
    return sessionStorage.getItem('jwt') != null;
  }

}
