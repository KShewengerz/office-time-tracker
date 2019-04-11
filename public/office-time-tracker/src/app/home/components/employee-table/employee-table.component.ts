import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Employee } from '@app/shared/models/employee.model';


@Component({
  selector    : 'app-employee-table',
  templateUrl : './employee-table.component.html',
  styleUrls   : ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @Input()
  set employees({ body }) {
    this.dataSource = new MatTableDataSource<Employee[]>(body);
  }
  
  displayedColumns: string[] = ['Name', 'Clock In', 'Clock Out', 'Active', 'Action'];
  dataSource: MatTableDataSource<Employee[]>;
  
  constructor() {}
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
}
