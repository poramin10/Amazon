import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './components/share-module';
import { ThemesBaseComponent } from './template/themes-base/themes-base.component';
import { DemopageComponent } from './template/demopage/demopage.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { AppState } from './app-state';

// NGX Bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './modules/account/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesBaseComponent,
    DemopageComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule { }
