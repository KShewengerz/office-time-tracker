import { Response } from 'express';

import { ErrorMessage } from '@app/interfaces';
import { HttpStatusCode, ErrorType } from '@app/enums';


export class ErrorHandler {
  
  static error(res: Response, { code, detail }): void {
    const statusCode = this.getPgStatusErrorCode(code);
    const message    = this.extractDbErrorMessage(detail);
    const response: ErrorMessage  = { statusCode, message };
    
    res.status(statusCode).send(response);
  }
  
  static getPgStatusErrorCode(code: string) {
    const errorCodes = {
      "23505": HttpStatusCode.BAD_REQUEST
    };
    
    return errorCodes[code];
  }
  
  static extractDbErrorMessage(message: string): string {
    const matchKey = message.match(/\w+(?=\)\=)/g)[0];
    const name     = matchKey.replace(/\b\w/, v => v.toUpperCase());
    
    return `${name} already exists.`;
  }
  
  static customError(res: Response, statusCode: HttpStatusCode, title: string, type: ErrorType) {
    const message: string = this.getCustomErrorMessage(title, type);
    const response: ErrorMessage   = { statusCode, message };
    
    res.status(statusCode).send(response);
  }
  
  static getCustomErrorMessage(title: string, type: ErrorType): string {
    const messages = {
      [ErrorType.EMPTY]               : `${title} records are empty`,
      [ErrorType.NOTFOUND]            : `${title} not found`,
      [ErrorType.INVALID_PASSWORD]    : `Password is incorrect`,
      [ErrorType.INVALID_CREDENTIALS] : `Invalid username / password`
    };
    
    return messages[type];
  }
  
}