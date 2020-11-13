import {query, Request, Response} from 'express';
import {ManualVideoPostService} from '../../services/video/manualVideoPost.service';

export const ManualVideoPostController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await ManualVideoPostService(req.body, req.query);

    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
