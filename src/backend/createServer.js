import path from 'path'
import feathers from '@feathersjs/feathers'
import express from '@feathersjs/express'
import { MongoClient } from 'mongodb'
import feathersConfig from '@feathersjs/configuration'
import socketio from '@feathersjs/socketio'
import compression from 'compression'

const app = express(feathers())

app
  .configure(feathersConfig(path.join(process.cwd())))
  .use(compression())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', express.static(path.join(process.cwd(), 'public')))
  .configure(express.rest())
  .configure(socketio())
  .use(express.errorHandler())

const createServer = async () => {
  const db = await MongoClient.connect(app.get('mongoURI'))
  return app
}

export default createServer
