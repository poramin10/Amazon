import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemopageComponent } from "./demopage/demopage.component";
import { FromtemplateComponent } from "./fromtemplate/fromtemplate.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";
import { PoContractComponent } from "./po-contract/po-contract.component";
import { TemplateComponent } from "./templateTheme/template.component";

const routes: Routes = [
  {
      path: 'po_contact',
      component: PoContractComponent,
  },
  {
      path: 'page2',
      component: Page2Component,
  },
  {
      path: 'page3',
      component: Page3Component,
  },
  {
      path: 'demopage',
      component: DemopageComponent,
  },
  {
      path: 'templatetheme',
      component: TemplateComponent,
  },
  {
      path: 'formtemplate',
      component: FromtemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
