import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector    : 'app-add-employee-btn',
  templateUrl : './add-employee-btn.component.html',
  styleUrls   : [ './add-employee-btn.component.scss' ]
})
export class AddEmployeeBtnComponent {
  
  @Output() showEmployeeForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  isAddEmployeeFormActive: boolean;
  
  constructor() {}
  
  emitShowEmployeeForm(): void {
    this.isAddEmployeeFormActive = !this.isAddEmployeeFormActive;
    this.showEmployeeForm.emit(this.isAddEmployeeFormActive);
  }
  
}
