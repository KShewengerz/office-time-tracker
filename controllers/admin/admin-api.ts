import { Request, Response, NextFunction } from "express";
import {hashSync, genSaltSync, compareSync, compare} from 'bcrypt';

import { AdminTable, HttpStatusCode } from '@app/enums';
import { Admin } from '@app/interfaces';
import { db } from '@app/config';
import { ErrorHandler } from '@app/helpers';

const snakeCase = require('snakecase-keys');
const camelCase = require('camelcase-keys');


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
        
        matchPassword ? res.status(HttpStatusCode.OK).send({ id, username }) : res.status(HttpStatusCode.NOT_FOUND).send('Invalid Password');
      }
      else {
        res.status(HttpStatusCode.NOT_FOUND).send('User not found');
      }
      
    });
  
  // res.status(HttpStatusCode.OK).send({ username });
}
