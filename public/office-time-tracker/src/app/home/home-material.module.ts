import { NgModule } from '@angular/core';

import { MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class HomeMaterialModule {}
