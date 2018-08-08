import feathers from '@feathersjs/client'
import feathersSocketIO from '@feathersjs/socketio-client'
import socket from 'socket.io-client'
import setupServices from './services/index'
import url from './config/index'

const socketIO = socket(url.api.host)
const app = feathers()

app
  .configure(feathersSocketIO(socketIO))
  .configure(setupServices(app))

export default app
