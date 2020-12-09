import {MongoService} from '../../index';

export const VideoBySearchService = async (term: string) => {
  try {
    const result = await MongoService.db('Videos')
      .collection('Video Entries')
      .find({$text: {$search: term}})
      .toArray();
    return {success: true, body: result};
  } catch (err) {
    return {success: false, error: err};
  }
};
