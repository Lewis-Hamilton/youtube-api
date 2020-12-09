import {Request, Response} from 'express';
import {AdminCreateService} from '../../services/admin/adminCreate.service';

export const AdminCreateController = async (req: Request, res: Response) => {
  try {
    const result = await AdminCreateService(req.body);

    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
