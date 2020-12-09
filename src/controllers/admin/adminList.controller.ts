import {Request, Response} from 'express';
import {AdminListService} from '../../services/admin/adminList.service';

export const AdminListController = async (req: Request, res: Response) => {
  try {
    const findAdmins = await AdminListService();
    res.send(findAdmins);
  } catch (err) {
    res.status(500).send(err);
  }
};
