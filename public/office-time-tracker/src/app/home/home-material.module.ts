import { NgModule } from '@angular/core';

import { MatToolbarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ]
})
export class HomeMaterialModule {}
