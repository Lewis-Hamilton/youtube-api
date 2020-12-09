import bodyParser = require('body-parser');
import cors = require('cors');
import express = require('express');
import morgan = require('morgan');
import helment = require('helmet');
require('dotenv').config();
import fileUpload = require('express-fileupload');
import {VideoRouter} from './routes/video';
import {AdminRouter} from './routes/admin';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
    this.app.use(cors());
    this.app.use(helment());
    this.app.use(morgan('combined'));
    this.app.use(
      fileUpload({
        createParentPath: true,
      })
    );

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  }

  private routes(): void {
    this.app.use('/api/video', VideoRouter);
    this.app.use('/api/admin', AdminRouter);
  }
}

export default new App().app;
