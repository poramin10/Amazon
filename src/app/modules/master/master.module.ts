import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterRoutingModule } from './master-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { DemopageComponent } from './demopage/demopage.component';
import { SharedModule } from 'src/app/components/share-module';
import { TemplateComponent } from './templateTheme/template.component';
import { FromtemplateComponent } from './fromtemplate/fromtemplate.component';
import { PoContractComponent } from './po-contract/po-contract.component';
import { MaterialComponent } from './material/material.component';


@NgModule({
  declarations: [ Page1Component, Page2Component, Page3Component, DemopageComponent, TemplateComponent, FromtemplateComponent, PoContractComponent, MaterialComponent ],
  imports: [CommonModule, ReactiveFormsModule , MasterRoutingModule , SharedModule ],
  providers: [],
  exports: [
    Page3Component,
    DemopageComponent,
    TemplateComponent,
    FromtemplateComponent,
    MaterialComponent
  ],
})
export class MasterModule {}
