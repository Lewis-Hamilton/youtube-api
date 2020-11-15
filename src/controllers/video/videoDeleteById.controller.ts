import {Request, Response} from 'express';

import {VideoDeleteByIdService} from '../../services/video/videoDeleteById.service';

export const VideoDeleteByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const deleteVideo = await VideoDeleteByIdService(req.params.id);
    res.send(deleteVideo);
  } catch (err) {
    res.status(500).send(err);
  }
};
