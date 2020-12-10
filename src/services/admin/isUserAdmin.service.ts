import {ObjectID} from 'mongodb';
import {MongoService} from '../..';

interface AdminList {
  _id: ObjectID;
  email: string;
  username: string;
  uid: string;
  creation_date: string;
}

export const IsUserAdminService = async (uid: string) => {
  try {
    const adminList: AdminList[] = await MongoService.db('Videos')
      .collection('Admins')
      .find({})
      .toArray();
    const result = adminList.map(admin => admin.uid === uid);
    return {success: true, body: result.includes(true)};
  } catch (err) {
    return {success: false, error: err};
  }
};
