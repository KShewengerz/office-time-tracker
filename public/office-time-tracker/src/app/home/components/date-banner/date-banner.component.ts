import { Component } from '@angular/core';

import * as moment from 'moment';


@Component({
  selector    : 'app-date-banner',
  templateUrl : './date-banner.component.html',
  styleUrls   : ['./date-banner.component.scss']
})
export class DateBannerComponent {
  
  now: moment.Moment = moment();
  
  constructor() {}
  
  get day(): number {
    return this.now.date();
  }
  
  get month(): any {
    const month = this.now.month();
    return moment().month(month).format('MMMM');
  }
  
  get year(): number {
    return this.now.year();
  }
  
}
