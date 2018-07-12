import path from 'path';
import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import { MongoClient } from 'mongodb';
import feathersConfig from '@feathersjs/configuration';
import socketio from '@feathersjs/socketio';
import compression from 'compression';

const app = express(feathers());

app
  .use(compression())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .configure(feathersConfig(path.join(process.cwd())))
  .configure(express.rest())
  .configure(socketio())
  .use(express.errorHandler());

const createServer = async () => {
  const db = await MongoClient.connect("mongodb://localhost:27017/euforia", { useNewUrlParser: true });
  return app;
};

export default createServer;
