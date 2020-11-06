import {Request, Response} from 'express';
import {videoPostService} from '../../services/video/videoPost.service';

export const VideoPostController = async (req: Request, res: Response) => {
  try {
    if (!req.files) {
      throw new Error('No file uploaded');
    }
    const file = req.files;

    const result = await videoPostService(file, req.body);

    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
