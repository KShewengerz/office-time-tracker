import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { HomeService } from '@app/home/services/home.service';

import { ResponseStatus } from '@app/shared/models/response-status.model';


@Injectable({ providedIn: 'root' })
export class EmployeeResolverService implements Resolve<ResponseStatus> {
  
  constructor(private homeService: HomeService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseStatus> {
    return this.homeService.getEmployees();
  }
  
}
