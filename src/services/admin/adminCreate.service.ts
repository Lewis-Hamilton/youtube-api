import {MongoService} from '../../index';
require('dotenv').config();
import moment from 'moment';

interface Body {
  email: string;
  username: string;
  uid: string;
}

export const AdminCreateService = async (body: Body) => {
  const {email, username, uid} = body;
  try {
    const result = await MongoService.db('Videos')
      .collection('Admins')
      .insertOne({
        email,
        username,
        uid,
        creationDate: moment().format(),
      });

    return {
      success: true,
      body: result,
    };
  } catch (err) {
    return {success: false, error: err};
  }
};
