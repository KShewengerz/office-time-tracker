import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { SharedModule } from '@app/shared/shared.module';
import { HomeMaterialModule } from '@app/home/home-material.module';
import { HomeRoutingModule } from '@app/home/home-routing.module';

import { HomeComponent } from '@app/home/containers/home.component';
import { DateBannerComponent } from '@app/home/components/date-banner/date-banner.component';
import { EmployeeTableComponent } from '@app/home/components/employee-table/employee-table.component';
import { AddEmployeeBtnComponent } from '@app/home/components/employee-table/components/add-employee-btn/add-employee-btn.component';



@NgModule({
  imports: [
    FormsModule,
    NgxMaterialTimepickerModule,
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
