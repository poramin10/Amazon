import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Demopage1Component } from "./demopage1/demopage1.component";
import { Step3Component } from "./step3/step3.component";


const routes: Routes = [
  {
      path: 'step3',
      component: Step3Component,
  },
  {
    path: 'demopage1',
    component: Demopage1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalaProcessRoutingModule {}
