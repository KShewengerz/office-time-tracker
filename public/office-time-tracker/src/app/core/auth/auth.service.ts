import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as moment from 'moment';
import * as decode from 'jwt-decode';

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
              private router: Router,
              @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }
  
  
  private setSession(token: string) {
    const { expiresIn } = decode(token);
    const expires       = moment().add(expiresIn, 'hours');

    localStorage.setItem('token:id', token);
    localStorage.setItem('token:expiresIn', JSON.stringify(expires.valueOf()));
  }
  
  login(data: Credential): Observable<Auth> {
    const relativeUrl: string = `${this.url}/login`;
    
    return this
      .request(relativeUrl, HttpMethodEnum.POST, data)
      .pipe(tap(({ body }) => this.setSession(body)));
  }
  
  logout(): void {
    localStorage.removeItem('token:id');
    localStorage.removeItem('token:expiresIn');
    
    this.router.navigate(['/']);
  }
  
  get isLoggedIn(): boolean {
    const expiredAt   = localStorage.getItem('token:expiresIn');
    const expiration  = moment(JSON.parse(expiredAt));
    
    return moment().isBefore(expiration);
  }
  
}
