import { Router } from 'express';

import * as api from './admin.api';

const router: Router = Router();



/**
 * Admin login
 */
router.post('/login', api.login);


export const adminRoute: Router = router;