import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KalaProcessRoutingModule } from './kalaprocress-routing.module';
import { SharedModule } from 'src/app/components/share-module';
import { Step3Component } from './step3/step3.component';



@NgModule({
  declarations: [
    Step3Component
  ],
  imports: [CommonModule, ReactiveFormsModule , KalaProcessRoutingModule , SharedModule ],
  providers: [],
  exports: [
    Step3Component
  ],
})
export class KalaProcessModule {}