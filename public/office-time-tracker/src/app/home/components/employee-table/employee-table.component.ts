import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { Employee } from '@app/shared/models/employee.model';

import { HomeService } from '@app/home/services/home.service';


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
    this.isChangeState = body.reduce((acc, { id }) => Object.assign(acc, { [id]: false }), {});
    this.dataSource = new MatTableDataSource<Employee>(body);
  }
  
  displayedColumns: string[] = ['name', 'clockIn', 'clockOut', 'active', 'action'];
  dataSource: MatTableDataSource<any>;
  
  isAddState: boolean;
  isChangeState: any;
  
  constructor(private homeService: HomeService) {}
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  showForm(isShow: boolean): void {
    const data: Employee    = { name: null, clockIn: null, clockOut: null, active: null, action: 'add' };
  
    this.isAddState = !this.isAddState;
    
    this.dataSource.data.unshift(data);
    this.dataSource._updateChangeSubscription();
  }
  
  changeState(action: string, id: number): void {
    this.isChangeState[id] = !this.isChangeState[id];
    
    if (action) {
      if (action === 'add') {
        this.isAddState = !this.isAddState;
        
        this.dataSource.data.shift();
        this.dataSource._updateChangeSubscription();
      }
      
      this.dataSource.data.map(data => {
        if (data.id === id) data.action = null;
        return data;
      });
    }
  }
  
  save(action: string, body: Employee, index?: number): void {
    action === 'add'
      ? this.addEmployee(body)
      : action === 'edit'
      ? this.updateEmployee(body, index)
      : this.deleteEmployee(index);
  }
  
  addEmployee(body: Employee): void {
    this.homeService
      .addEmployee(body)
      .subscribe(({ body }: any) => {
        this.dataSource.data.splice(0, 1, body);
        this.dataSource._updateChangeSubscription();
  
        this.changeState('add', body.id);
      });
  }
  
  updateEmployee(body: Employee, index: number): void {
    this.homeService
      .updateEmployee(body)
      .subscribe(({ body }: any) => {
        this.dataSource.data.splice(index, 1, body);
        this.dataSource._updateChangeSubscription();
  
        this.changeState('edit', body.id);
      });
  }
  
  deleteEmployee(index: number): void {
    this.homeService
      .deleteEmployee(index)
      .subscribe(({ body }: any) => {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
  
        this.changeState(null, body.id);
      });
  }
  
}
