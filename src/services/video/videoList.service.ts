import {MongoService} from '../..';

export const VideoListService = async () => {
  try {
    const result = await MongoService.db('Videos')
      .collection('Video Entries')
      .find({})
      .toArray();
    return {success: true, body: result};
  } catch (err) {
    return {success: false, error: err};
  }
};
