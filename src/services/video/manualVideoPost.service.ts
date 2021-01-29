import {MongoService} from '../..';
import cloudinary = require('cloudinary');
import moment from 'moment';
require('dotenv').config();

interface Body {
  title: string;
  description: string;
  thumbnail: string;
  quality: number;
  url: string;
}

export const ManualVideoPostService = async (body: Body, query: any) => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  try {
    if (query.thumbnail === 'file') {
      const result = await cloudinary.v2.uploader.upload(
        body.thumbnail,
        async (error, result) => {
          if (result) {
            await MongoService.db('Videos')
              .collection('Video Entries')
              .insertOne({
                title: body.title,
                description: body.description,
                url: body.url,
                thumbnail: result.secure_url,
                creationDate: moment().format(),
              });
            Promise.resolve(result);
          } else {
            Promise.reject(error);
          }
        }
      );
      return {
        success: true,
        body: {
          title: body.title,
          description: body.description,
          url: body.url,
          thumbnail: result.secure_url,
          creationDate: moment().format(),
        },
      };
    } else {
      await MongoService.db('Videos').collection('Video Entries').insertOne({
        title: body.title,
        description: body.description,
        url: body.url,
        thumbnail: body.thumbnail,
      });

      return {
        success: true,
        body: {
          title: body.title,
          description: body.description,
          url: body.url,
          thumbnail: body.thumbnail,
        },
      };
    }
  } catch (err) {
    return {success: false, error: err};
  }
};
