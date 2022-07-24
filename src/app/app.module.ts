import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './components/share-module';
import { ThemesBaseComponent } from './template/themes-base/themes-base.component';
import { DemopageComponent } from './template/demopage/demopage.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { AppState } from './app-state';



@NgModule({
  declarations: [
    AppComponent,
    ThemesBaseComponent,
    DemopageComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule { }
