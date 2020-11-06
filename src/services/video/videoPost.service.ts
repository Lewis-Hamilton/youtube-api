import fileUpload = require('express-fileupload');
import cloudinary = require('cloudinary');
import {MongoService} from '../..';
require('dotenv').config();

import DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
interface Body {
  title: string;
  description: string;
  thumbnail: string;
  quality: number;
}

export const videoPostService = async (
  file: fileUpload.FileArray,
  body: Body
) => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  try {
    const videoFile = parser.format(file.video.mimetype, file.video.data);

    const result = await cloudinary.v2.uploader.upload_large(
      videoFile.content ? videoFile.content : '',
      {
        transformation: {quality: body.quality || 100},
        resource_type: 'video',
      },
      async (error, result) => {
        if (result) {
          await MongoService.db('Videos')
            .collection('Video Entries')
            .insertOne({
              title: body.title || file.video.name,
              description: body.description || '',
              url: result?.secure_url,
              thumbnail:
                body.thumbnail || result?.secure_url.slice(0, -3) + 'jpg',
            });
          Promise.resolve(result);
        } else {
          Promise.reject(error);
        }
      }
    );

    return {success: true, body: result};
  } catch (err) {
    return {success: false, error: err};
  }
};
