import { Router } from 'express';

import * as api from './employee.api';
import { ValidateAuthentication } from '@app/helpers';

const router: Router = Router();


/**
 * Adds new employee
 */
router.post('/', ValidateAuthentication.isAuthenticated, api.addEmployee);


/**
 * Update's employee information.
 */
router.put('/', ValidateAuthentication.isAuthenticated, api.updateEmployee);


/**
 * Get All employees
 */
router.get('/', ValidateAuthentication.isAuthenticated, api.getEmployees);

/**
 * Get employee by id
 *
 * @param {number} id
 */

router.get('/:id', ValidateAuthentication.isAuthenticated, api.getEmployee);


/**
 * Deletes employee record by id
 *
 * @param {number} id
 */
router.delete('/:id', ValidateAuthentication.isAuthenticated, api.deleteEmployee);


export const employeeRoutes: Router = router;