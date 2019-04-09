import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from '@app/core/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canLoad: [ AuthGuard ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
