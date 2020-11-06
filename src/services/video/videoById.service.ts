import {ObjectID} from 'mongodb';
import {MongoService} from '../../index';

const VideoByIdService = async (_id: string) => {
  try {
    const o_id = new ObjectID(_id);
    const result = await MongoService.db('Videos')
      .collection('Video Entries')
      .findOne({_id: o_id});
    return {success: true, body: result};
  } catch (err) {
    console.log(err);
    return {success: false, error: err};
  }
};

export default VideoByIdService;
