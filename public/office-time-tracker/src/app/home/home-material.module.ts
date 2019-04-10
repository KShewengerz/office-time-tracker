import { NgModule } from '@angular/core';

import { MatToolbarModule, MatTableModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class HomeMaterialModule {}
