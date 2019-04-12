import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { Employee } from '@app/shared/models/employee.model';


@Component({
  selector    : 'app-employee-table',
  templateUrl : './employee-table.component.html',
  styleUrls   : ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  @Input()
  set employees({ body }) {
    this.isDeleteState = body.reduce((acc, { id }) => Object.assign(acc, { [id]: false }), {});

    this.dataSource = new MatTableDataSource<Employee[]>(body);
    
  }
  
  displayedColumns: string[] = ['name', 'clockIn', 'clockOut', 'active', 'action'];
  dataSource: MatTableDataSource<Employee[]>;
  
  isDeleteActivated: boolean = false;
  isDeleteState: any;
  
  constructor() {}
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  deleteEmployee(id: number): void {
  
  }
  
  changeDeleteState(id: number): void {
    this.isDeleteActivated = !this.isDeleteActivated;
    this.isDeleteState[id] = !this.isDeleteState[id];
  }
  
}
