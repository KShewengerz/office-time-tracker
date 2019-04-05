import {Response} from 'express';
import {ResponseMessage} from '@app/interfaces';
import {HttpMethod, HttpStatusCode} from '@app/enums';


export class ResponseHandler {

  static response(res: Response, method: HttpMethod, title: string, body?: any): void {
    const status: number            = this.getStatus(method);
    const message: string           = this.getMessage(title, method);
    const response: ResponseMessage = { status, message, body };
    
    res.status(status).send(response);
  }
  
  static getStatus(method: HttpMethod): number {
    return method === HttpMethod.POST ? HttpStatusCode.CREATED : HttpStatusCode.OK;
  }
  
  static getMessage(title: string, method: HttpMethod): string {
    const messages = {
      [HttpMethod.POST] : `Successfully Added ${title}`,
      [HttpMethod.PUT]  : `Successfully Updated ${title}`,
      [HttpMethod.GET]  : `Record/s exists`,
      [HttpMethod.DEL]  : `Successfully Deleted ${title}`
    };

    return messages[method];
  }

}