import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { HomeMaterialModule } from '@app/home/home-material.module';
import { HomeRoutingModule } from '@app/home/home-routing.module';

import { HomeComponent } from '@app/home/containers/home.component';
import { DateBannerComponent } from '@app/home/components/date-banner/date-banner.component';
import { EmployeeTableComponent } from '@app/home/components/employee-table/employee-table.component';
import { AddEmployeeBtnComponent } from '@app/home/components/employee-table/components/add-employee-btn/add-employee-btn.component';



@NgModule({
  imports: [
    SharedModule,
    HomeMaterialModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    DateBannerComponent,
    EmployeeTableComponent,
    AddEmployeeBtnComponent
  ]
})
export class HomeModule {}
