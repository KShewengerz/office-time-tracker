import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector    : 'app-time-picker-input',
  templateUrl : './time-picker-input.component.html',
  styleUrls   : [ './time-picker-input.component.scss' ]
})
export class TimePickerInputComponent {
  
  @Input() name: string;
  @Input() min: string;
  @Input() max: string;
  @Input() clock: any;
  @Input() title: string;
  @Input() action: string;
  
  @Output() timeSelected: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {}
  
  getCondition(): boolean {
    return this.action === 'add' ? this.clock.match('-') : this.clock.match('-') && this.action !== 'add';
  }
  
}
