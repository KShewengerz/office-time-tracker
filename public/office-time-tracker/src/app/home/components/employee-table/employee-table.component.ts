import { Component, OnInit, ViewChild, Input } from '@angular/core';

import * as moment from 'moment';

import { MatSort, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';

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
  
  isChangeState: any;
  isFormActivated: boolean = false;
  
  constructor(private snackBar: MatSnackBar,
              private homeService: HomeService) {}
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  showForm(isShow: boolean): void {
    const data: Employee    = { action: 'add', name: null, clockIn: null, clockOut: null, active: false };
    
    this.isFormActivated = !this.isFormActivated;
    
    this.dataSource.data.unshift(data);
    this.dataSource._updateChangeSubscription();
  }
  
  changeState(action: string, id: number, isProcessed?: boolean): void {
    if (!this.isChangeState[id] && action === 'add') this.isChangeState[id] = true;
  
    this.isChangeState[id] = !this.isChangeState[id];
    this.isFormActivated   = !this.isFormActivated;
    
    if (action) {
      this.dataSource.data.map(data => {
        if (data.id === id) data.action = null;
        return data;
      });
      
      if (action === 'add' && !isProcessed) {
        this.dataSource.data.shift();
        this.dataSource._updateChangeSubscription();
      }
    }
  }
  
  showSnackbar(action: string, error?: boolean): void {
    const message = error ? 'Please fill in the required fields' : `Successfully ${action} Employee`;
    this.snackBar.open(message, 'X', { duration: 2000 });
  }
  
  save(action: string, body: Employee, index?: number): void {
    const isEmptyFields = Object.keys(body).some(key => key !== 'active' ? !body[key] : false);
    
    if (isEmptyFields && action) this.showSnackbar(null, true);
    else {
      action === 'add'
        ? this.addEmployee(body)
        : action === 'edit'
        ? this.updateEmployee(body, index)
        : this.deleteEmployee(body.id, index);
    }
  }
  
  addEmployee(body: Employee): void {
    body.clockIn  = moment(body.clockIn, ['LT']).format('YYYY-MM-DD h:mm:ss a');
    body.clockOut = moment(body.clockOut, ['LT']).format('YYYY-MM-DD h:mm:ss a');
    
    const { action, ...rest } = body;
    
    this.homeService
      .addEmployee(rest)
      .subscribe(({ body }: any) => {
        this.dataSource.data.shift();
        this.dataSource.data.unshift(body);
        this.dataSource._updateChangeSubscription();

        this.changeState('add', body.id, true);
        this.showSnackbar('Added');
      });
  }
  
  updateEmployee(body: Employee, index: number): void {
    this.homeService
      .updateEmployee(body)
      .subscribe(({ body }: any) => {
        this.dataSource.data.splice(index, 1, body);
        this.dataSource._updateChangeSubscription();
  
        this.changeState('edit', body.id);
        this.showSnackbar('Updated');
      });
  }
  
  deleteEmployee(id: number, index: number): void {
    this.homeService
      .deleteEmployee(id)
      .subscribe(({ body }: any) => {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
  
        this.changeState('delete', body.id);
        this.showSnackbar('Deleted');
      });
  }
  
}
