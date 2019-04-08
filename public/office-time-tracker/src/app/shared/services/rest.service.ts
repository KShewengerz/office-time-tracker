import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpMethodEnum } from '@app/shared/enums/http-method.enum';


export abstract class RestService {
  
  constructor(private http: HttpClient,
              protected baseUrl: string) {}
  
  protected request(relativeUrl: string, method: HttpMethodEnum, data?: any): Observable<any> {
    const url     = this.baseUrl + relativeUrl;
    
    return this.http[method](url, data)
      .pipe(
        map(response => response),
        catchError(err => throwError(err))
      );
  }
  
}
