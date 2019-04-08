import { NgModule } from '@angular/core';

import { MatGridListModule, MatCardModule } from '@angular/material';


@NgModule({
  exports: [
    MatGridListModule,
    MatCardModule
  ]
})
export class LoginMaterialModule {}
