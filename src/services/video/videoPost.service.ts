import fileUpload = require('express-fileupload');
import cloudinary = require('cloudinary');
import {MongoService} from '../..';
require('dotenv').config();

export const videoPostService = async (file: fileUpload.FileArray) => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  try {
    await cloudinary.v2.uploader
      .upload_stream(
        {
          quality_analysis: true,
          transformation: {quality: 50},
          resource_type: 'video',
          discard_original_filename: false,
        },
        async (err, result) => {
          if (err) {
            throw err;
          }
          await MongoService.db('Videos')
            .collection('Video Entries')
            .insertOne({
              title: file.video.name,
              description: '',
              url: result?.secure_url,
              thumbnail: result?.secure_url.slice(0, -3) + 'jpg',
            });
        }
      )
      .end(file.video.data);
    return {success: true};
  } catch (err) {
    return {success: false, error: err};
  }
};
