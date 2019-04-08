import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RestService } from '@app/shared/services/rest.service';

import { Credential } from '@app/login/models/credential.model';
import { Auth } from '@app/core/auth/auth.model';
import { HttpMethodEnum } from '@app/shared/enums/http-method.enum';


@Injectable({ providedIn: 'root' })
export class AuthService extends RestService {
  
  url: string = '/admin';
  
  constructor(http: HttpClient,
              @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }
  
  
  private setSession({ token, expiresIn }: Auth) {
    expiresIn = JSON.stringify(moment().add(expiresIn, 'hours').valueOf());
    
    localStorage.setItem('token:id', token);
    localStorage.setItem('token:expiresIn', expiresIn);
  }
  
  login(data: Credential): Observable<Auth> {
    const relativeUrl: string = `${this.url}/login`;
    
    return this
      .request(relativeUrl, HttpMethodEnum.POST, data)
      .pipe(tap(({ body }) => this.setSession(body)));
  }
  
  logout(): void {
    localStorage.removeItem('admin');
  }
  
  isLoggedIn(): boolean {
    const expiredAt   = localStorage.getItem('token:expiresIn');
    const expiration  = moment(expiredAt);
    
    return moment().isBefore(expiration);
  }
  
}
