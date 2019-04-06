import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '@app/login/login-routing.module';

import { LoginFormComponent } from '@app/login/components/login-form/login-form.component';
import { LoginComponent } from '@app/login/containers/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
