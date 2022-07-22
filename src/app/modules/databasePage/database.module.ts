import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatabaseRoutingModule } from './database-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


@NgModule({
  declarations: [ Page1Component, Page2Component ],
  imports: [CommonModule, ReactiveFormsModule , DatabaseRoutingModule ],
  providers: [],
  exports: [
    Page1Component,
    Page2Component
  ],
})
export class DatabaseModule {}
