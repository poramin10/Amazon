import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterRoutingModule } from './master-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [ Page1Component, Page2Component ],
  imports: [CommonModule, ReactiveFormsModule , MasterRoutingModule ],
  providers: [],
})
export class MasterModule {}
