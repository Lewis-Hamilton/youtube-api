import {MongoService} from '../..';

interface Body {
  title: string;
  description: string;
  thumbnail: string;
  quality: number;
  url: string;
}

export const ManualVideoPostService = async (body: Body) => {
  try {
    const videoEntry = await MongoService.db('Videos')
      .collection('Video Entries')
      .insertOne({
        title: body.title,
        description: body.description,
        url: body.url,
        thumbnail: body.thumbnail,
      });

    return {success: true, body: videoEntry};
  } catch (err) {
    return {success: false, error: err};
  }
};
