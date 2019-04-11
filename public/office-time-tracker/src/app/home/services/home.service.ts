import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '@app/shared/services/rest.service';

import { HttpMethodEnum } from '@app/shared/enums/http-method.enum';
import { ResponseStatus } from '@app/shared/models/response-status.model';


@Injectable({ providedIn: 'root' })
export class HomeService extends RestService {
  
  url: string = '/employee';
  
  constructor(http: HttpClient,
              @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }
              
  getEmployees(): Observable<ResponseStatus> {
    return this.request(this.url, HttpMethodEnum.GET);
  }
  
  getEmployee(id: number): Observable<ResponseStatus> {
    return this.request(this.url + id, HttpMethodEnum.GET);
  }
  
  addEmployee(body: any): Observable<ResponseStatus> {
    return this.request(this.url, HttpMethodEnum.POST, body);
  }
  
  updateEmployee(body: any): Observable<ResponseStatus> {
    return this.request(this.url, HttpMethodEnum.PUT);
  }
  
  deleteEmployee(): Observable<ResponseStatus> {
    return this.request(this.url, HttpMethodEnum.DEL);
  }
  
}
