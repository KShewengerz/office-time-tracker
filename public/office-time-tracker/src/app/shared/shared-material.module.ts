import { NgModule } from '@angular/core';

import { MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';


@NgModule({
  exports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class SharedMaterialModule {}
