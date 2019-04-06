import { Router } from 'express';

import * as api from './employee.api';


const router: Router = Router();


/**
 * Adds new employee
 */
router.post('/', api.addEmployee);


/**
 * Update's employee information.
 */
router.put('/', api.updateEmployee);


/**
 * Get All employees
 */
router.get('/', api.getEmployees);

/**
 * Get employee by id
 *
 * @param {number} id
 */

router.get('/:id', api.getEmployee);


/**
 * Deletes employee record by id
 *
 * @param {number} id
 */
router.delete('/:id', api.deleteEmployee);


export const employeeRoutes: Router = router;