import {Request, Response} from 'express';

import {VideoListService} from '../../services/video/videoList.service';

export const VideoListController = async (req: Request, res: Response) => {
  try {
    const findVideos = await VideoListService();
    res.send(findVideos);
  } catch (err) {
    res.status(500).send(err);
  }
};
