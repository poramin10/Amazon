import { Component, OnInit } from '@angular/core';
import { AppState } from './app-state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogin:any = '';

  constructor(
    private appState: AppState,
    private router: Router
  ){
    this.appState.JwtCheckAsObservable().subscribe((res) => {
      this.isLogin = res;
    });
  }

  ngOnInit(): void {

    if(sessionStorage.getItem('jwt')){
      this.appState.JwtCheck.next(sessionStorage.getItem('jwt')!)
      this.router.navigate(['master/material'], {
        replaceUrl: true,
      });
    }

    this.appState.JwtCheck.subscribe();
    this.isLogin = this.appState.JwtCheck.value
  }

  title = 'amazon';

}
