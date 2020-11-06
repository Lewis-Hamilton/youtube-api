import {MongoService} from '../../index';

export const VideoBySearchService = async (search: string) => {
  try {
    const result = await MongoService.db('Videos')
      .collection('Videos Entries')
      .find({$text: {$search: search}})
      .toArray();
    return {success: true, body: result};
  } catch (err) {
    return {success: false, error: err};
  }
};
