import {Request, Response} from 'express';
import VideoByIdService from '../../services/video/videoById.service';

export const VideoByIdController = async (req: Request, res: Response) => {
  try {
    const findVideo = await VideoByIdService(req.params.id);
    res.send(findVideo);
  } catch (err) {
    res.status(500).send(err);
  }
};
