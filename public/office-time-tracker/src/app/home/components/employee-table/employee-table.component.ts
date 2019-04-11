import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  id: number;
  timeIn: number;
  timeOut: string;
  active: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', timeIn: 1.0079, timeOut: 'H', active: false },
  {id: 2, name: 'Helium', timeIn: 4.0026, timeOut: 'He', active: true},
  {id: 3, name: 'Lithium', timeIn: 6.941, timeOut: 'Li', active: false},
  {id: 4, name: 'Beryllium', timeIn: 9.0122, timeOut: 'Be', active: false},
  {id: 5, name: 'Boron', timeIn: 10.811, timeOut: 'B', active: false},
  {id: 6, name: 'Carbon', timeIn: 12.0107, timeOut: 'C', active: true},
  {id: 7, name: 'Nitrogen', timeIn: 14.0067, timeOut: 'N', active: false},
  {id: 8, name: 'Oxygen', timeIn: 15.9994, timeOut: 'O', active: false},
  {id: 9, name: 'Fluorine', timeIn: 18.9984, timeOut: 'F', active: true},
  {id: 10, name: 'Neon', timeIn: 20.1797, timeOut: 'Ne', active: false},
  {id: 11, name: 'Sodium', timeIn: 22.9897, timeOut: 'Na', active: false},
  {id: 12, name: 'Magnesium', timeIn: 24.305, timeOut: 'Mg', active: true},
  {id: 13, name: 'Aluminum', timeIn: 26.9815, timeOut: 'Al', active: true},
  {id: 14, name: 'Silicon', timeIn: 28.0855, timeOut: 'Si', active: true},
  {id: 15, name: 'Phosphorus', timeIn: 30.9738, timeOut: 'P', active: false},
  {id: 16, name: 'Sulfur', timeIn: 32.065, timeOut: 'S', active: true},
  {id: 17, name: 'Chlorine', timeIn: 35.453, timeOut: 'Cl', active: false},
  {id: 18, name: 'Argon', timeIn: 39.948, timeOut: 'Ar', active: true},
  {id: 19, name: 'Potassium', timeIn: 39.0983, timeOut: 'K', active: true},
  {id: 20, name: 'Calcium', timeIn: 40.078, timeOut: 'Ca', active: false},
];



@Component({
  selector    : 'app-employee-table',
  templateUrl : './employee-table.component.html',
  styleUrls   : ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  
  displayedColumns: string[] = ['Name', 'Time In', 'Time Out', 'Active', 'Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor() {}
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
}
