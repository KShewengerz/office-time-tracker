import { Request, Response, NextFunction } from "express";

import { HttpStatusCode, EmployeeTable } from '@app/enums';
import { Employee } from '@app/interfaces';
import { db } from '@app/config/knex';

const snakeCase = require('snakecase-keys');
const camelCase = require('camelcase-keys');


/**
 * Adds new employee
 * @api {post} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function addEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.json("Successfully Added Employee");
}


/**
 * Update employee's information
 * @api {put} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */

export async function updateEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.json("Successfully Updated Employee");
}


/**
 * Fetches all employee
 * @api {get} /user
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getEmployees(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.json("Successfully Get Users");
}


/**
 * Fetches employee's record
 * @api {get} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.json("Successfully Get Employee Info");
}


/**
 * Deletes employee's record by id
 * @api {delete} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function deleteEmployee(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.json("Successfully Deleted Employee");
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
