import { Request, Response, NextFunction } from "express";

import { HttpStatusCode, EmployeeTable } from '@app/enums';
import { Employee } from '@app/interfaces';
import { db } from '@app/config/knex';

const snakeCase = require('snakecase-keys');
const camelCase = require('camelcase-keys');


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
  const body = snakeCase(req.body);
  
  await db(EmployeeTable.Table)
    .insert(body)
    .catch(err => err);
  
  res.sendStatus(HttpStatusCode.CREATED);
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
  
  await db(EmployeeTable.Table)
    .where({ id })
    .update(body)
    .catch(err => err);
  
  res.sendStatus(HttpStatusCode.OK);
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
  
  res.json(result);
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
  const id                = req.params.id;
  const fetchEmployee     = await db(EmployeeTable.Table).where({ id });
  const result: Employee  = camelCase(fetchEmployee);
  
  res.json(result);
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
  
  await db(EmployeeTable.Table)
  .where({ id })
  .del()
  .catch(err => err);
  
  res.sendStatus(HttpStatusCode.NO_CONTENT);
}


/**
 * Mock employee's login
 *
 * @param req
 * @param res
 * @param next
 */
export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  const username =  req.body.username;
  res.status(HttpStatusCode.OK).send({ username });
}
