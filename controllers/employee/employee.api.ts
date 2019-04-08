import {NextFunction, Request, Response} from 'express';

import { db } from '@app/config';
import { Employee } from '@app/interfaces';
import { CustomMethod, EmployeeTable, ErrorType, HttpMethod, HttpStatusCode } from '@app/enums';
import { ErrorHandler, ResponseHandler } from '@app/helpers';

const snakeCase = require('snakecase-keys');
const camelCase = require('camelcase-keys');

const title: string = 'employee';


/**
 * Adds new employee
 * @api {post} /employee
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function addEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  const body  = snakeCase(req.body);
  
  await db(EmployeeTable.Table)
    .insert(body)
    .catch(err => ErrorHandler.error(res, err) );
  
  if (res.statusCode !== HttpStatusCode.BAD_REQUEST) {
    const currentId = await db(EmployeeTable.Table).select(EmployeeTable.Id).orderBy(EmployeeTable.Id, 'desc').limit(1);
    body.id  = currentId[0].id;
    
    ResponseHandler.response(res, HttpMethod.POST, title, body);
  }
}


/**
 * Update employee's information
 * @api {put} /employee
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */

export async function updateEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  const id   = req.body.id;
  const body = snakeCase(req.body);
  
  const employee = await db(EmployeeTable.Table)
    .where({ id })
    .update(body)
    .catch(err => err);
  
  if (employee) ResponseHandler.response(res, HttpMethod.PUT, title, body);
  else ErrorHandler.customError(res, HttpStatusCode.NOT_FOUND, title, ErrorType.NOT_FOUND);
}


/**
 * Fetches all employee
 * @api {get} /employee
 *
 * @apiParam {number} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getEmployees(req: Request, res: Response, next: NextFunction): Promise<void> {
  const employees          = await db(EmployeeTable.Table).select();
  const result: Employee[] = camelCase(employees);
  
  ResponseHandler.response(res, CustomMethod.FETCH_ALL, title, result);
}


/**
 * Fetches employee's record
 * @api {get} /employee/:id
 *
 * @apiParam {number} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  const id        = req.params.id;
  const employee  = await db(EmployeeTable.Table).where({ id });
  
  if (employee.length) {
    const result: Employee  = camelCase(employee);
    ResponseHandler.response(res, HttpMethod.GET, title, result);
  }
  else ErrorHandler.customError(res, HttpStatusCode.NOT_FOUND, title, ErrorType.NOT_FOUND);
}


/**
 * Deletes employee's record by id
 * @api {delete} /employee/:id
 *
 * @apiParam {number} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function deleteEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  const id = req.params.id;
  
  const employee = await db(EmployeeTable.Table)
    .where({ id })
    .del()
    .catch(err => err);
  
  if (employee) ResponseHandler.response(res, HttpMethod.DEL, title, { id });
  else ErrorHandler.customError(res, HttpStatusCode.NOT_FOUND, title, ErrorType.NOT_FOUND);
}
