import {Request, Response} from 'express';
import {IsUserAdminService} from '../../services/admin/isUserAdmin.service';

export const IsUserAdminController = async (req: Request, res: Response) => {
  try {
    const findAdmins = await IsUserAdminService(req.params.uid);
    res.send(findAdmins);
  } catch (err) {
    res.status(500).send(err);
  }
};
