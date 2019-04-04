import { Request, Response, NextFunction } from "express";


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
export function addEmployee(req: Request, res: Response, next: NextFunction) {
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

export function updateEmployee(req: Request, res: Response, next: NextFunction) {
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
export function getEmployees(req: Request, res: Response, next: NextFunction) {
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
export function getEmployee(req: Request, res: Response, next: NextFunction) {
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
export function deleteEmployee(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Deleted Employee");
}

