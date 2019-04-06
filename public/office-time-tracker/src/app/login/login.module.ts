import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginMaterialModule } from '@app/login/login-material.module';
import { LoginRoutingModule } from '@app/login/login-routing.module';

import { LoginFormComponent } from '@app/login/components/login-form/login-form.component';
import { LoginComponent } from '@app/login/containers/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LoginMaterialModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
