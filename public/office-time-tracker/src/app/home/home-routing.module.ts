import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/home/containers/home.component';

import { EmployeeResolverService } from '@app/home/services/employee-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      employees: EmployeeResolverService
    }
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
