import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { RestService } from '@app/shared/services/rest.service';

import { Credential } from '@app/login/models/credential.model';
import { HttpMethodEnum } from '@app/shared/enums/http-method.enum';


@Injectable({ providedIn: 'root' })
export class LoginService extends RestService {
  
  url: string = '/admin';
  
  constructor(http: HttpClient,
              @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

  login(data: Credential) {
    const relativeUrl: string = `${this.url}/login`;
    return this.request(relativeUrl, HttpMethodEnum.POST, data);
  }
  
}
