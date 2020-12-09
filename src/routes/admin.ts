import {Router} from 'express';
import {AdminCreateController} from '../controllers/admin/adminCreate.controller';
import {AdminListController} from '../controllers/admin/adminList.controller';
import wrapAsync from '../middleware/async.middleware';

const router: Router = Router();

router.post('/', wrapAsync(AdminCreateController));

router.get('/', wrapAsync(AdminListController));

export const AdminRouter: Router = router;
