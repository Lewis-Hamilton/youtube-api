import {Request, Response} from 'express';
import {ManualVideoPostService} from '../../services/video/manualVideoPost.service';

export const ManualVideoPostController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await ManualVideoPostService(req.body);

    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
