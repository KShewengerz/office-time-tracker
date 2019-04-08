import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMaterialModule } from '@app/login/login-material.module';
import { LoginRoutingModule } from '@app/login/login-routing.module';

import { LoginComponent } from '@app/login/containers/login/login.component';
import { LoginFormComponent } from '@app/login/components/login-form/login-form.component';
import { IntroComponent } from '@app/login/components/intro/intro.component';


@NgModule({
  imports: [
    CommonModule,
    LoginMaterialModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    IntroComponent
  ]
})
export class LoginModule { }
