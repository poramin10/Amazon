import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable ()
export class AppState {
  pageNameMenu:BehaviorSubject<string> = new BehaviorSubject<string>('');
  pageTitle:BehaviorSubject<string> = new BehaviorSubject<string>('');
  JwtCheck:BehaviorSubject<string> = new BehaviorSubject<string>('');

  pageTitleAsObservable(){
    return this.pageTitle.asObservable();
  }

  pageNameMenuAsObservable(){
    return this.pageNameMenu.asObservable();
  }

  JwtCheckAsObservable(){
    return this.JwtCheck.asObservable();
  }

}


