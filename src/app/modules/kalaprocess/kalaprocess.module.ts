import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KalaProcessRoutingModule } from './kalaprocress-routing.module';
import { SharedModule } from 'src/app/components/share-module';
import { Step3Component } from './step3/step3.component';
import { Demopage1Component } from './demopage1/demopage1.component';

import { PaginatorModule } from 'primeng/paginator';
// import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    Step3Component,
    Demopage1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KalaProcessRoutingModule,
    SharedModule,
    PaginatorModule,
    ButtonModule
  ],
  providers: [],
  exports: [
    Step3Component
  ],
})
export class KalaProcessModule { }
