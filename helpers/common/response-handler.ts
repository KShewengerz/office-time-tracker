import { Response } from 'express';
import { ResponseMessage } from '@app/interfaces';
import { HttpMethod, HttpStatusCode, CustomMethod } from '@app/enums';


export class ResponseHandler {

  static response(res: Response, method: HttpMethod | CustomMethod, title: string, body?: any): void {
    const status: number            = this.getStatus(method);
    const message: string           = this.getMessage(title, method);
    const response: ResponseMessage = { status, message, body };
    
    res.status(status).send(response);
  }
  
  static getStatus(method: HttpMethod | CustomMethod): number {
    if(<HttpMethod>method) return method === HttpMethod.POST ? HttpStatusCode.CREATED : HttpStatusCode.OK;
    else return HttpStatusCode.OK;
  }
  
  static getMessage(title: string, method: HttpMethod | CustomMethod): string {
    const messages = {
      [HttpMethod.POST]    : `Successfully Added ${title}`,
      [HttpMethod.PUT]     : `Successfully Updated ${title}`,
      [HttpMethod.GET]     : `Record/s exists`,
      [HttpMethod.DEL]     : `Successfully Deleted ${title}`,
      [CustomMethod.LOGIN] : `${title} successfully logged in`
    };

    return messages[method];
  }

}