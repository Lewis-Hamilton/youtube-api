import {MongoService} from '../..';

export const AdminListService = async () => {
  try {
    const result = await MongoService.db('Videos')
      .collection('Admins')
      .find({})
      .toArray();
    return {success: true, body: result};
  } catch (err) {
    return {success: false, error: err};
  }
};
