import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { SharedModule } from 'src/app/components/share-module';
import { ApprovalRoutingModule } from './approval-routing.module';


@NgModule({
  declarations: [Page1Component],
  imports: [CommonModule, ReactiveFormsModule, ApprovalRoutingModule, SharedModule],
  providers: [],
  exports: [
    Page1Component,
  ],
})
export class ApprovalModule { }
