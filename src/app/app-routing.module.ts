import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/account/login/login.component';
import { NotfoundComponent } from './modules/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'master',
    loadChildren: () =>
      import('./modules/master/master.module').then((m) => m.MasterModule),
  },
  {
    path: 'database',
    loadChildren: () =>
      import('./modules/databasePage/database.module').then((m) => m.DatabaseModule),
  },
  {
    path: 'approval',
    loadChildren: () =>
      import('./modules/approval/approval.module').then((m) => m.ApprovalModule),
  },
  {
    path: 'kalaprocess',
    loadChildren: () =>
      import('./modules/kalaprocess/kalaprocess.module').then((m) => m.KalaProcessModule),
  },
  {
    path: 'notfound',
    component: NotfoundComponent
      // import('./modules/master/master.module').then((m) => m.MasterModule),
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
