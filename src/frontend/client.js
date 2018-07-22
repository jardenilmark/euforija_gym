import feathers from '@feathersjs/client'
import feathersSocketIO from '@feathersjs/socketio-client'
import socket from 'socket.io-client'
import setupServices from './services/index'

const url = window.location.origin
const socketIO = socket(url)
const app = feathers()

app
  .configure(feathersSocketIO(socketIO))
  .configure(setupServices(app))

export default app
