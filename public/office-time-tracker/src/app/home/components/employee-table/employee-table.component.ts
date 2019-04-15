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
  
  showAddForm(isShow: boolean): void {
    const data: Employee    = { action: 'add', name: null, clockIn: '06:00 am', clockOut: null, active: false };
    
    this.isFormActivated = !this.isFormActivated;
    
    this.dataSource.data.unshift(data);
    this.dataSource._updateChangeSubscription();
  }
  
  showEditForm(id: number): void {
    this.isFormActivated = !this.isFormActivated;
    this.dataSource.data.map(data => data.id === id ? Object.assign(data, { action: 'edit' }) : data);
  }
  
  changeState(action: string, id: number, isProcessed?: boolean): void {
    if (!this.isChangeState[id] && action === 'add') this.isChangeState[id] = true;
    
    this.isChangeState[id] = !this.isChangeState[id];
    this.isFormActivated   = !this.isFormActivated;
    
    if (action) {
      this.dataSource.data.map(data => data.id === id ? Object.assign(data, { action: null }) : data);
      
      if (action === 'add' && !isProcessed) {
        this.dataSource.data.shift();
        this.dataSource._updateChangeSubscription();
      }
    }
  }
  
  save(action: string, body: Employee, index?: number): void {
    const isEmptyFields = Object.keys(body).some(key => key !== 'active' ? !body[key] : false);
    
    if (isEmptyFields && action) this.showSnackbar(null, true);
    else {
      body.clockIn  = moment(body.clockIn, ['LT']).format('YYYY-MM-DD h:mm:ss a');
      body.clockOut = moment(body.clockOut, ['LT']).format('YYYY-MM-DD h:mm:ss a');
      
      const { action, ...rest } = body;
      
      action === 'add'
        ? this.addEmployee(rest)
        : action === 'edit'
        ? this.updateEmployee(rest, index)
        : this.deleteEmployee(body.id, index);
    }
  }
  
  addEmployee(body: Employee): void {
    this.homeService
      .addEmployee(body)
      .subscribe(({ body }: any) => {
        this.dataSource.data.shift();
        this.dataSource.data.unshift(body);
        this.dataSource._updateChangeSubscription();
  
        this.setStateandSnackbar(body.id, 'add', 'Added', true);
      });
  }
  
  updateEmployee(body: Employee, index: number): void {
     this.homeService
      .updateEmployee(body)
      .subscribe(({ body }: any) => {
        this.dataSource.data.splice(index, 1, body);
        this.dataSource._updateChangeSubscription();
        
        this.isChangeState[body.id] = true;
        
        this.setStateandSnackbar(body.id, 'edit', 'Updated');
      });
  }
  
  deleteEmployee(id: number, index: number): void {
    this.homeService
      .deleteEmployee(id)
      .subscribe(({ body }: any) => {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
  
        this.setStateandSnackbar(body.id, 'delete', 'Deleted');
      });
  }
  
  showSnackbar(action: string, error?: boolean): void {
    const message = error ? 'Please fill in the required fields' : `Successfully ${action} Employee`;
    this.snackBar.open(message, 'X', { duration: 2000 });
  }
  
  setStateandSnackbar(id: number, action: string, title: string, isProcessed?: boolean): void {
    this.changeState(action, id, isProcessed);
    this.showSnackbar(title);
  }
  
}
