import {ObjectID} from 'mongodb';
import {MongoService} from '../..';

export const VideoDeleteByIdService = async (_id: string) => {
  try {
    const result = await MongoService.db('Videos')
      .collection('Video Entries')
      .deleteOne({_id: new ObjectID(_id)});
    return {success: true, body: result};
  } catch (err) {
    return {success: false, error: err};
  }
};
