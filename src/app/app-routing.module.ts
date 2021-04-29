import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule),

  },
  {
    path: 'document',
    loadChildren: () => import('./modules/document/document.module').then(module => module.DocumentModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
