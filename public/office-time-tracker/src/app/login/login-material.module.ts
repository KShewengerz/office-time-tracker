import { NgModule } from '@angular/core';

import { MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatGridListModule } from '@angular/material';


@NgModule({
  exports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class LoginMaterialModule {}
