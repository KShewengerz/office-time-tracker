import { NextFunction, Request, Response } from "express";
import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { db } from '@app/config';
import { AdminTable, ErrorType, CustomMethod, HttpStatusCode } from '@app/enums';
import { ErrorHandler, ResponseHandler } from '@app/helpers';

const title: string = 'admin';

require('dotenv').config();


/**
 * Login: Validates admin's credentials
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { username, password } = req.body;
  
  await db(AdminTable.Table)
    .where({ username })
    .then(admin => {
      
      if (admin.length) {
        const { id, username, password: hashedPassword } = admin[0];
        const matchPassword = compareSync(password, hashedPassword);
        
        if (matchPassword) {
          const key       = process.env.TOKEN_PRIVATE_KEY;
          const expiresIn = Math.floor(Date.now() / 1000) + 86400000;
          const token     = sign({ id, username, expiresIn }, key, { expiresIn });
          
          ResponseHandler.response(res, CustomMethod.LOGIN, title, token);
        }
        else ErrorHandler.customError(res, HttpStatusCode.UNAUTHORIZED, title, ErrorType.INVALID_PASSWORD);
      }
      else ErrorHandler.customError(res, HttpStatusCode.UNAUTHORIZED, title, ErrorType.INVALID_CREDENTIALS);
      
    });
}
