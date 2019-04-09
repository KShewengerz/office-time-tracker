import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { HomeMaterialModule } from '@app/home/home-material.module';
import { HomeRoutingModule } from '@app/home/home-routing.module';

import { HomeComponent } from '@app/home/containers/home.component';



@NgModule({
  imports: [
    SharedModule,
    HomeMaterialModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
