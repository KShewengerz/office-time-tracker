import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector    : 'app-form-btn-actions',
  templateUrl : './form-btn-actions.component.html',
  styleUrls   : [ './form-btn-actions.component.scss' ]
})
export class FormBtnActionsComponent {
  
  @Input() isChangeState: boolean;
  @Input() element: any;
  @Input() isFormActivated: boolean;
  @Input() index: number;
  
  @Output() activateEditForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() activateState: EventEmitter<any> = new EventEmitter<any>();
  @Output() saveChanges: EventEmitter<any> = new EventEmitter<any>();
  
  
  constructor() { }
  
}
