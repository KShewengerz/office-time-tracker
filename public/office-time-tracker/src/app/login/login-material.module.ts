import { NgModule } from '@angular/core';

import { MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatGridListModule, MatCardModule } from '@angular/material';


@NgModule({
  exports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class LoginMaterialModule {}
