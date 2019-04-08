import { NgModule } from '@angular/core';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { SharedModule } from '@app/shared/shared.module';

import { LoginMaterialModule } from '@app/login/login-material.module';
import { LoginRoutingModule } from '@app/login/login-routing.module';

import { LoginComponent } from '@app/login/containers/login/login.component';
import { LoginFormComponent } from '@app/login/components/login-form/login-form.component';
import { IntroComponent } from '@app/login/components/intro/intro.component';


@NgModule({
  imports: [
    SharedModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: (error, field) => `${field.key} is required` }
      ]
    }),
    FormlyMaterialModule,
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
