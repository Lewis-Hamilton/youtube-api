import {Router} from 'express';
import {AdminCreateController} from '../controllers/admin/adminCreate.controller';
import wrapAsync from '../middleware/async.middleware';

const router: Router = Router();

router.post('/', wrapAsync(AdminCreateController));

export const AdminRouter: Router = router;
