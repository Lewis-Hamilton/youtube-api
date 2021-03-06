import {Request, Response} from 'express';
import {VideoBySearchService} from '../../services/video/videoBySearch.service';

export const VideoBySearchController = async (req: Request, res: Response) => {
  try {
    const findVideos = await VideoBySearchService(req.query.search as string);
    res.send(findVideos);
  } catch (err) {
    res.status(500).send(err);
  }
};
