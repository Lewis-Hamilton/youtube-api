import {Router} from 'express';
import {AdminCreateController} from '../controllers/admin/adminCreate.controller';
import {AdminListController} from '../controllers/admin/adminList.controller';
import {IsUserAdminController} from '../controllers/admin/isUserAdmin.controller';
import wrapAsync from '../middleware/async.middleware';

const router: Router = Router();

router.post('/', wrapAsync(AdminCreateController));

router.get('/', wrapAsync(AdminListController));

router.get('/:uid', wrapAsync(IsUserAdminController));

export const AdminRouter: Router = router;
