import { Response } from 'express';
import { ErrorMessage } from '@app/interfaces';
import { HttpStatusCode } from '@app/enums';


export class ErrorHandler {
  
  static error(res: Response, { code, detail: message }): void {
    const status                  = this.getHttpStatusCode(code);
    const developerMessage        = this.getDeveloperMessage(message);
    const response: ErrorMessage  = { status, code, message, developerMessage };
    
    res.status(status).send(response);
  }
  
  static getHttpStatusCode(code: string): number {
    return this.postgresErrorCodes[code];
  }
  
  static getDeveloperMessage(message: string): string {
    const matchKey = message.match(/\w+(?=\)\=)/g)[0];
    const name     = matchKey.replace(/\b\w/, v => v.toUpperCase());
    
    return `${name} already exists.`;
  }
  
  static get postgresErrorCodes() {
    return {
      "23505": HttpStatusCode.BAD_REQUEST
    };
  }
  
}